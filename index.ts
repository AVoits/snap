import Snap = require("snapsvg");

import {Coordinate} from "./tracks/tracks.model";
import {Curve} from "./curve/model";
import {CurveView} from "./curve/view";
import {makeDifferentTracks} from "./tracks/makeDifferentTracks";
import {Controller} from "./curve/controller";

const s = Snap("#svg");

const example: Coordinate[] = [
    {x: 100, y: 150},
    {x: 300, y: 200},
    {x: 350, y: 250},
    {x: 450, y: 400},
    {x: 650, y: 250},
]


// makeTracks(s, example)
// makeDifferentTracks(s, example)


const controller = new Controller(example)
controller.draw()