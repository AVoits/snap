import * as Snap from "snapsvg";
import {Coordinate} from "../tracks.model";
import {drawPlainPath} from "./draw.path";

export const addPlainPath = (s: Snap.Paper, coordinates: Coordinate[]) => {
    const [start, ...rest] = coordinates
    // координаты начальной точки QBC
    const M = `M ${start.x},${start.y}`

    // пример d="M 10 210 L 110 10 L 210 210"
    const path = rest.reduce((acc: string, current) => {
        return `${acc} L ${current.x} ${current.y}`
    }, M)

    drawPlainPath(s, path)
}
