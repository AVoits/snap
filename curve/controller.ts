import {Arc, Curve, Point, PointType} from "./model";
import {CurveView} from "./view";
import {Coordinate} from "../tracks/tracks.model";

export class Controller {
    model: Curve
    view: CurveView

    constructor(example: Coordinate[]) {
        this.model = new Curve(example)


        this.view = new CurveView(
            this.model,
            {
                onPointMove: this.pointMoveHandler.bind(this),
                onAddAnchor: this.anchorAddHandler.bind(this),
            }
        )
    }

    draw() {
        console.log(this.model)
        this.view.render()
    }

    pointMoveHandler(point: Point, dx: number, dy: number, x: number, y: number, event: MouseEvent) {
        if(point.type === PointType.anchorStart || point.type === PointType.anchorEnd){
            this.model.moveAnchor(point, dx, dy, x, y, event)
        }

        if(point.type === PointType.controlStart || point.type === PointType.controlEnd){
            this.model.moveControl(point, dx, dy, x, y, event)
        }

        this.view.render()
    }

    anchorAddHandler(arc: Arc, event: MouseEvent){
        this.model.addAnchor(arc, event.x, event.y)
        this.view.render()
    }
}