import {Chunk, Coordinate, Point} from "../tracks.model";
import * as Snap from "snapsvg";
import {getChunks, getMiddleDot, getQBCPoint, mapCurveDataFromChunks} from "../coordinates.utils";
import {drawCurvePath} from "./draw.path";

// Расчет пути как Quadratic Bezier Curves, далее QBC
// пока оставим, не используется
export const getPathByQBC = (points: Coordinate[]): string => {
    const [firstDot, secondDot, ...rest] = points

    const middleDot = getMiddleDot(firstDot, secondDot)
    const QBCPoint = getQBCPoint(middleDot, secondDot)

    // координаты начальной точки QBC
    const M = `M ${firstDot.x},${firstDot.y}`

    // Контрольные точки, пример d="M50,200 Q175,75 300,200"
    //(x1,y1) (x,y)
    const Q = `Q${QBCPoint.x},${QBCPoint.y} ${secondDot.x},${secondDot.y}`

    const resultPath = rest.reduce((acc, current) => {
        return `${acc} T ${current.x}, ${current.y}`
    }, Q)

    // M(mx,my) Q(x1,y1) T(x,y)
    return `${M} ${resultPath}`
}


// Расчет пути как Cubic Bezier Curve, далее CBC
export const getPathByCBC = (points: Point[]): string => {
    // x1, y1 – координаты первой контрольной точки
    // x2, y2 – координаты второй контрольной точки
    // x, y – координаты финальной точки кривой Безье
    // <path d="M100,100 C139,32 209,148 280,140 " />

    // координаты начальной точки QBC

    const [first,...rest] = points
    const M = `M ${first.x},${first.y}`

    const controlsForPath = []

    for (let i = 0; i <= rest.length - 1; i++) {
        const start = i === 0 ? first : rest[i -1]
        const end = rest[i]
        const C = `C${start.controlStart.x},${start.controlStart.y} ${end.controlEnd.x},${end.controlEnd.y} ${end.x},${end.y}`
        controlsForPath.push(C)
    }

    return `${M} ${controlsForPath.join(' ')}`
}

export const addCurvePath = (s: Snap.Paper, points: Point[]) => {
    const path = getPathByCBC(points)
    drawCurvePath(s, path)
}
