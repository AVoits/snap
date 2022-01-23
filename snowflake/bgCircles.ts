import {colors} from "./consts/colors.const";
import {RADIUS} from "./consts/measurements.consts";
import Snap = require("snapsvg");

export const setBgCircles = (s: Snap.Paper) => {
    s.circle(0, 0, RADIUS.R3).attr({stroke: colors.border, 'strokeWidth': 0.5, fill: colors.blue3});
    s.circle(0, 0, RADIUS.R2).attr({stroke: colors.border, 'strokeWidth': 0.5, fill: colors.blue2});
    s.circle(0, 0, RADIUS.R1).attr({stroke: colors.border, 'strokeWidth': 0.5, fill: colors.blue1});
}