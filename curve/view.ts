import {Arc, Curve, Point} from "./model";
import Snap = require("snapsvg");
import {MaterialColors} from "./colorsMaterial";

export class CurveView {
    private curve: Curve
    private field: Snap.Paper
    private handlers: any

    private defaultColor: string =  MaterialColors.Pink["500"]
    private controlStartColor: string = '#00ffe8'
    private controlEndColor: string = '#ee00ff'

    constructor(curve: Curve, handlers: any) {
        this.curve = curve;
        this.field = Snap("#svg");
        this.handlers = handlers;
    }

    public render() {
        this.field.clear()
        this.curve.arcs.map((arc, index, arr) => {
            this.drawPath(arc)
            this.drawControls(arc)
            this.drawAnchor(arc.anchorStart)

            if (index === arr.length - 1) {
                this.drawAnchor(arc.anchorEnd)
            }
        })

        this.drawHelpInfo()
    }

    public drawHelpInfo(){
        this.field
            .rect(10,10,350,85,8,8)
            .attr({
                stroke: MaterialColors.Teal["500"],
                strokeWidth: 1,
                fill: MaterialColors.Teal["100"]
            });

        this.field
            .text(20,30,'Клик по кривой - перекрасить')
            .attr({fill: MaterialColors.Teal["900"]});

        this.field
            .text(20,60,'Двойной клик по кривой - добавить якорь')
            .attr({fill: MaterialColors.Teal["900"]});

        this.field
            .text(20,80,'Двойной клик по якорю - удалить якорь')
            .attr({fill: MaterialColors.Teal["900"]});

    }

    private drawControls(arc: Arc) {

        this.field.circle(arc.controlStart.x, arc.controlStart.y, 5)
            .attr({fill: this.controlStartColor})
            .drag((dx, dy, x, y, event) => this.handlers.onPointMove(arc.controlStart, dx, dy, x, y, event), this.onStart, this.onStop);

        this.field.line(arc.controlStart.x, arc.controlStart.y, arc.anchorStart.x, arc.anchorStart.y)
            .attr({stroke: this.controlStartColor, 'strokeWidth': 1, strokeDasharray: '5'});


        this.field.circle(arc.controlEnd.x, arc.controlEnd.y, 5)
            .attr({fill: this.controlEndColor})
            .drag((dx, dy, x, y) => this.handlers.onPointMove(arc.controlEnd, dx, dy, x, y), this.onStart, this.onStop);


        this.field.line(arc.controlEnd.x, arc.controlEnd.y, arc.anchorEnd.x, arc.anchorEnd.y)
            .attr({stroke: this.controlEndColor, 'strokeWidth': 1, strokeDasharray: '5'});
    }

    private drawPath(arc: Arc) {
        const path = this.getPathString(arc)

        this.field.path(path)
            .attr({stroke: arc.arcColor || this.defaultColor, 'strokeWidth': 4, fill: 'none', opacity: 0.8})
            .dblclick((e) => this.handlers.onAddAnchor(arc, e))
            .click((e) => this.handlers.onChangePathColor(arc, e))
    }

    private drawAnchor(point: Point) {
        this.field.circle(point.x, point.y, 10)
            .attr({fill: 'pink'})
            .dblclick((e) => {
                this.handlers.onDeleteAnchor(point, e)
            })
            .drag((dx, dy, x, y) => this.handlers.onPointMove(point, dx, dy, x, y), this.onStart, this.onStop);
    }

    private onStart() {
    }

    private onStop() {
    }

    private getPathString(arc: Arc): string {
        const M = `M ${arc.anchorStart.x},${arc.anchorStart.y}`

        const controlStart: string = `${arc.controlStart.x},${arc.controlStart.y}`
        const controlEnd: string = `${arc.controlEnd.x},${arc.controlEnd.y}`
        const anchorEnd: string = `${arc.anchorEnd.x},${arc.anchorEnd.y}`

        const C = `C${controlStart} ${controlEnd} ${anchorEnd}`

        return `${M} ${C}`
    }
}
