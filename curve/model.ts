import {CONTROL_DISTANCE} from "../tracks/tracks.const";
import {v4 as uuidv4} from 'uuid';
import {Coordinate, CurveData} from "./curve.model";


export enum PointType {
    anchorStart = 'anchorStart',
    anchorEnd = 'anchorEnd',
    controlStart = 'controlStart',
    controlEnd = 'controlEnd',
}

export interface PointParams {
    coordinate: Coordinate,
    type: PointType,
    arcID: number
}

export class Point {
    x: number
    y: number
    arcID: number
    type: PointType

    constructor(params: PointParams) {
        const {coordinate, arcID, type} = params
        // console.log(params)

        this.x = coordinate.x
        this.y = coordinate.y
        this.arcID = arcID
        this.type = type
    }

    controlMoveHandler(dx: number, dy: number) {
        this.x = this.x + dx
        this.y = this.y + dy
    }
}

export interface ArcParams {
    data: CurveData,
    arcID: number
}

export class Arc {
    anchorStart: Point
    anchorEnd: Point

    controlStart: Point
    controlEnd: Point

    arcID: number
    arcColor: string


    constructor(params: ArcParams) {
        this.createByCurveData(params)
    }

    private createByCurveData(params: ArcParams) {
        const {data, arcID} = params

        this.arcID = arcID

        this.anchorStart = new Point({coordinate: data.start, type: PointType.anchorStart, arcID})
        this.anchorEnd = new Point({coordinate: data.end, type: PointType.anchorEnd, arcID})

        const startControlCoordinate = data.cStart ? data.cStart : this.makeControlStart(data.start)
        this.controlStart = new Point({coordinate: startControlCoordinate, type: PointType.controlStart, arcID})

        const endControlCoordinate = data.cEnd ? data.cEnd : this.makeControlEnd(data.end)
        this.controlEnd = new Point({coordinate: endControlCoordinate, type: PointType.controlEnd, arcID})
    }

    private makeControlStart(point: Coordinate) {
        const newCoordinate: Coordinate = {
            x: point.x,
            y: point.y - CONTROL_DISTANCE

        }
        return newCoordinate
    }

    private makeControlEnd(point: Coordinate) {
        const newCoordinate: Coordinate = {
            x: point.x,
            y: point.y + CONTROL_DISTANCE

        }
        return newCoordinate
    }
}

export class Curve {
    arcs: Arc[] = []

    constructor(data: CurveData[]) {
        this.arcs = data.map(item => {
            return new Arc({data: item, arcID: uuidv4()})
        })
    }

    public moveAnchor(point: Point, dx: number, dy: number, x: number, y: number, event: MouseEvent) {
        // @ts-ignore
        const indexArc = this.arcs.findIndex((item) => {
            return item.arcID === point.arcID
        })

        const currentArc = this.arcs[indexArc]
        const prevArc = this.arcs[indexArc - 1]

        if (point.type === PointType.anchorEnd) {
            currentArc.anchorEnd.x = x
            currentArc.anchorEnd.y = y

            return
        }

        if (prevArc) {
            prevArc.anchorEnd.x = x
            prevArc.anchorEnd.y = y
        }

        currentArc.anchorStart.x = x
        currentArc.anchorStart.y = y
    }

    public moveControl(point: Point, dx: number, dy: number, x: number, y: number, event: MouseEvent) {
        // @ts-ignore
        const currentArc = this.arcs.find((arc) => arc.arcID === point.arcID)

        if (point.type === PointType.controlStart) {
            currentArc.controlStart.x = x
            currentArc.controlStart.y = y
        }

        if (point.type === PointType.controlEnd) {
            currentArc.controlEnd.x = x
            currentArc.controlEnd.y = y
        }
    }


    private splitArc(arc: Arc, x: number, y: number): Arc[] {
        const uuidFirst = uuidv4()
        const uuidSecond = uuidv4()

        const firstPoint = new Point({
            arcID: uuidFirst,
            type: PointType.anchorEnd,
            coordinate: {x, y}
        })
        const secondPoint = new Point({
            arcID: uuidSecond,
            type: PointType.anchorEnd,
            coordinate: {x, y}
        })

        const firstArc = new Arc({
            arcID: uuidFirst,
            data: {
                start: arc.anchorStart,
                end: firstPoint
            }
        })

        const secondArc = new Arc({
            arcID: uuidSecond,
            data: {
                start: secondPoint,
                end: arc.anchorEnd
            }
        })

        return [firstArc, secondArc]
    }

    public addAnchor(arc: Arc, x: number, y: number) {
        // @ts-ignore
        const currentArcIndex = this.arcs.findIndex((item) => arc.arcID === item.arcID)
        const newArcs = this.splitArc(arc, x, y)

        if (currentArcIndex !== -1) {
            this.arcs.splice(currentArcIndex, 1, ...newArcs)
        }
    }

    private joinArcs(start: Arc, end: Arc): Arc {
        return new Arc({
            arcID: uuidv4(),
            data: {
                start: start.anchorStart,
                end: end.anchorEnd
            }
        })
    }

    public deleteAnchor(point: Point) {
        // @ts-ignore
        const indexArc = this.arcs.findIndex((item) => {
            return item.arcID === point.arcID
        })

        if (this.arcs.length === 1) {
            return
        }

        if (point.type === PointType.anchorEnd) {
            this.arcs.splice(-1, 1)

            return;
        }

        const currentArc = this.arcs[indexArc]
        const prevArc = this.arcs[indexArc - 1]

        if (!prevArc) {
            this.arcs.splice(0, 1)
            return;
        }

        const newArc = this.joinArcs(prevArc, currentArc)

        this.arcs.splice(indexArc - 1, 2, newArc)
    }

    public changeArcColor(arc: Arc, color: string) {
        arc.arcColor = color
    }
}
