import * as Snap from "snapsvg";
import {Coordinate} from "../tracks.model";

export const drawAnchor = (s: Snap.Paper, coordinate: Coordinate, index: number) => {
    s.circle(coordinate.x, coordinate.y, 10)
        .attr({fill: 'pink', id: `anchor-${index}`});

    s.text(coordinate.x + 10, coordinate.y, `${coordinate.x} -- ${coordinate.y}`)
        .attr({fill: 'pink', id: `anchor-text-${index}`});
}
