import {Arc, Curve, Point} from "./model";
import Snap = require("snapsvg");

export class CurveView {
    private curve: Curve
    private field: Snap.Paper
    private handlers: any

    constructor(curve: Curve, handlers: any) {
        this.curve = curve;
        this.field = Snap("#svg");
        this.handlers = handlers;
    }

    render() {
        this.field.clear()
        this.curve.arcs.map((arc, index, arr) => {
            this.drawPath(arc)
            this.drawControls(arc)
            this.drawAnchor(arc.anchorStart)

            if(index === arr.length - 1){
                this.drawAnchor(arc.anchorEnd)
            }
        })
    }

    private drawControls(arc: Arc) {
        this.field.circle(arc.controlStart.x, arc.controlStart.y, 5)
            .attr({fill: 'red'})
            .drag((dx, dy, x, y, event) => this.handlers.onPointMove(arc.controlStart, dx, dy, x, y, event), this.onStart, this.onStop);


        this.field.line(arc.controlStart.x, arc.controlStart.y, arc.anchorStart.x, arc.anchorStart.y)
            .attr({stroke: 'red', 'strokeWidth': 1});


        this.field.circle(arc.controlEnd.x, arc.controlEnd.y, 5)
            .attr({fill: 'green'})
            .drag((dx, dy, x, y, event) => this.handlers.onPointMove(arc.controlEnd, dx, dy, x, y, event), this.onStart, this.onStop);


        this.field.line(arc.controlEnd.x, arc.controlEnd.y, arc.anchorEnd.x, arc.anchorEnd.y)
            .attr({stroke: 'green', 'strokeWidth': 1});
    }

    private drawPath(arc: Arc) {
        const path = this.getPathString(arc)

        this.field.path(path)
            .attr({stroke: '#FF00F4FF', 'strokeWidth': 4, fill: 'none', opacity: 0.8})
            .click((e) => this.handlers.onAddAnchor(arc, e))

    }

    private drawAnchor(point: Point) {
        this.field.circle(point.x, point.y, 10)
            .attr({fill: 'pink'})
            .drag((dx, dy, x, y, event) => this.handlers.onPointMove(point, dx, dy, x, y, event), this.onStart, this.onStop);
    }

    private onStart(){}
    private onStop(){}

    private getPathString(arc: Arc): string {
        const M = `M ${arc.anchorStart.x},${arc.anchorStart.y}`

        const controlStart: string = `${arc.controlStart.x},${arc.controlStart.y}`
        const controlEnd: string = `${arc.controlEnd.x},${arc.controlEnd.y}`
        const anchorEnd: string = `${arc.anchorEnd.x},${arc.anchorEnd.y}`

        const C = `C${controlStart} ${controlEnd} ${anchorEnd}`

        return `${M} ${C}`
    }

}