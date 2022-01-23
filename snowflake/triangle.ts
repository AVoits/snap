import {getPoint} from "./utils/mathCoordinates";
import {RADIUS} from "./consts/measurements.consts";
import {ItemProps} from "./models/trees.model";
import Snap = require("snapsvg");

export const makeTriangle = (svg: Snap.Paper, item: ItemProps, topX: number, topY: number) => {
    const start = getPoint(RADIUS.R3, item.start.grad)
    const end = getPoint(RADIUS.R3, item.end.grad)
    // @ts-ignore
    svg.polygon(topX, topY, start.posX, start.posY, end.posX, end.posY).attr(style.polygon);
}