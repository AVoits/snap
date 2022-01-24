import {Arc, Curve, Point, PointType} from "./model";
import {CurveView} from "./view";
import {MaterialColors} from "./colorsMaterial";
import {Coordinate, CurveData} from "./curve.model";

export class Controller {
    model: Curve
    view: CurveView

    constructor(example: CurveData[]) {
        this.model = new Curve(example)


        this.view = new CurveView(
            this.model,
            {
                onPointMove: this.pointMoveHandler.bind(this),
                onAddAnchor: this.anchorAddHandler.bind(this),
                onDeleteAnchor: this.anchorDeleteHandler.bind(this),
                onChangePathColor: this.pathChangeColor.bind(this),
            }
        )
    }

    draw() {
        this.view.render()
    }

    pointMoveHandler(point: Point, dx: number, dy: number, x: number, y: number, event: MouseEvent) {
        if (point.type === PointType.anchorStart || point.type === PointType.anchorEnd) {
            this.model.moveAnchor(point, dx, dy, x, y, event)
        }

        if (point.type === PointType.controlStart || point.type === PointType.controlEnd) {
            this.model.moveControl(point, dx, dy, x, y, event)
        }

        this.view.render()
    }

    anchorAddHandler(arc: Arc, event: MouseEvent) {
        this.model.addAnchor(arc, event.x, event.y)
        this.view.render()
    }

    anchorDeleteHandler(point: Point, event: MouseEvent) {
        this.model.deleteAnchor(point)
        this.view.render()
    }

    pathChangeColor(arc: Arc) {
        const colors = Object.keys(MaterialColors)
        const item = colors[Math.floor(Math.random() * colors.length)];
        const color = MaterialColors[item][500]

        this.model.changeArcColor(arc, color)
        this.view.render()
    }
}

