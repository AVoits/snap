import {Coordinate, Point} from "../tracks.model";
import * as Snap from "snapsvg";
import {drawAnchor} from "./draw.anchor";

export const addAnchors = (s: Snap.Paper, coordinates: Point[]) => {

    coordinates.map((item, index) => {
        drawAnchor(s, item, index)
    })
}


