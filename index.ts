import {Coordinate} from "./tracks/tracks.model";
import {Controller} from "./curve/controller";

const example: Coordinate[] = [
    {x: 100, y: 350},
    {x: 250, y: 300},
    {x: 400, y: 350},
    {x: 650, y: 500},
    {x: 800, y: 350},
]

const controller = new Controller(example)
controller.draw()