import * as Snap from "snapsvg";
import {Point} from "../tracks.model";


export const drawControlPoints = (s: Snap.Paper, item: Point, index: number, length: number) => {
    const pointRadius = 10

    if(index === 0) {
        s.circle(item.controlStart?.x, item.controlStart?.y, pointRadius)
            .attr({fill: '#16f3ff', id: `control-start-${index}`});
        return;
    }

    if(index === length) {
        s.circle(item.controlEnd?.x, item.controlEnd?.y, pointRadius)
            .attr({fill: '#16f3ff', id: `control-end-${index}`});
        return;
    }

    s.circle(item.controlStart?.x, item.controlStart?.y, pointRadius)
        .attr({fill: '#16f3ff', id: `control-start-${index}`});

    s.circle(item.controlEnd?.x, item.controlEnd?.y, pointRadius)
        .attr({fill: '#16f3ff', id: `control-end-${index}`});
}


export const drawControlLines = (s: Snap.Paper, point: Point, index: number, length: number) => {
    if(index === 0) {
        s.line(point.x, point.y, point?.controlStart?.x, point?.controlStart?.y)
            .attr(
                {
                    stroke: '#66ff00',
                    'strokeWidth': 3,
                    fill: 'none',
                    strokeDasharray: "5",
                    strokeDashoffset: 5,
                    id: `line-start-${index}`
                });
        return;
    }

    if(index === length) {
        s.line(point.x, point.y, point?.controlEnd?.x, point?.controlEnd?.y)
            .attr(
                {
                    stroke: '#22f1f9',
                    'strokeWidth': 3,
                    fill: 'none',
                    strokeDasharray: "5",
                    strokeDashoffset: 5,
                    id: `line-end-${index}`
                });

        return;
    }

    s.line(point.x, point.y, point?.controlStart?.x, point?.controlStart?.y)
        .attr(
            {
                stroke: '#66ff00',
                'strokeWidth': 5,
                fill: 'none',
                strokeDasharray: "5",
                strokeDashoffset: 5,
                id: `line-start-${index}`
            });

    s.line(point.x, point.y, point?.controlEnd?.x, point?.controlEnd?.y)
        .attr(
            {
                stroke: '#22f1f9',
                'strokeWidth': 5,
                fill: 'none',
                strokeDasharray: "5",
                strokeDashoffset: 5,
                id: `line-end-${index}`
            });
}

