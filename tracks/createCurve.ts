import {Chunk, Coordinate, CurveLine, Point} from "./tracks.model";
import {addCurvePath, getPathByCBC} from "./path/curve.path";
import {addControls} from "./control/control";
import {addPlainPath} from "./path/plain.path";
import {addAnchors} from "./anchor/anchors";
import * as Snap from "snapsvg";
import {getCurrentCurve, updateCurveData} from "./coordinates.utils";
import {drawCurvePath} from "./path/draw.path";

export const createCurve = (s: Snap.Paper, points: Point[]): void => {
    addCurvePath(s, points)
    addControls(s, points)

    addPlainPath(s, points)
    addAnchors(s, points)
}

export const getPath = (curve: CurveLine): string => {
    const M = `M ${curve.start.x},${curve.start.y}`

    const C = curve.points.map((item) => {
        return `C${item.c1.x},${item.c1.y} ${item.c2.x},${item.c2.y} ${item.endpoint.x},${item.endpoint.y}`
    })

    return `${M} ${C.join(' ')}`;
}


export const setCurve = (s: Snap.Paper, curve: CurveLine) => {
    const path = getPath(curve)
    drawCurvePath(s, path)
}


export const updateCurve = (index, newPoint) =>  {
    const curve = getCurrentCurve()
    // currentPath?.setAttribute("d", path)
}