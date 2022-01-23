import * as Snap from "snapsvg";
import {CurveLine, Point} from "../tracks.model";
import {drawControlLines, drawControlPoints} from "./draw.control";

export const setControls = (s: Snap.Paper, curve: CurveLine) => {
    const pointRadius = 10

    s.circle(curve.start.x, curve.start.y, pointRadius)
        .attr({fill: 'pink', id: `anchor-${0}`});


    for (let i = 0; i <= curve.points.length - 1; i++) {
        const item = curve.points[i]
        const prevItem = i === 0 ? curve.start : curve.points[i - 1].endpoint

        s.line(item.c1.x, item.c1.y, prevItem.x, prevItem.y)
            .attr(
                {
                    stroke: 'rgba(217,0,255,0.52)',
                    'strokeWidth': 5,
                    fill: 'none',
                    strokeDasharray: "5",
                    strokeDashoffset: 5,
                    id: `line-start-${i + 1}`
                });

        s.line(item.c2.x, item.c2.y, item.endpoint.x, item.endpoint.y)
            .attr(
                {
                    stroke: 'rgba(102,255,0,0.47)',
                    'strokeWidth': 5,
                    fill: 'none',
                    strokeDasharray: "5",
                    strokeDashoffset: 5,
                    id: `line-end-${i + 1}`
                });

        s.circle(item.c1.x, item.c1.y, pointRadius)
            .attr({fill: '#d900ff', id: `control-start-${i + 1}`});

        s.circle(item.c2.x, item.c2.y, pointRadius)
            .attr({fill: '#66ff00', id: `control-end-${i + 1}`});
    }

    for (let i = 0; i <= curve.points.length - 1; i++) {
        const item = curve.points[i]

        s.circle(item.endpoint.x, item.endpoint.y, pointRadius)
            .attr({fill: 'pink', id: `anchor-${i + 1}`});
    }
}

export const addControls = (s: Snap.Paper, points: Point[]) => {
    const length = points.length - 1

    points.map((item, index) => {
        drawControlLines(s, item, index, length)
        drawControlPoints(s, item, index, length)
    })
}


export const updateControl = (id: number, point: Point) => {

    // @ts-ignore
    gsap.set(`#control-start-${id}`, {attr: {cx: point.controlStart.x, cy: point.controlStart.y}});
    // @ts-ignore
    gsap.set(`#control-end-${id}`, {attr: {cx: point.controlEnd.x, cy: point.controlEnd.y}});

    // @ts-ignore
    gsap.set(`#line-start-${id}`, {
        attr: {
            x1: point.controlStart.x,
            y1: point.y,
            x2: point.x,
            y2: point.controlStart.y
        }
    });
    // @ts-ignore
    gsap.set(`#line-end-${id}`, {attr: {x1: point.x, y1: point.y, x2: point.controlEnd.x, y2: point.controlEnd.y}});
}
