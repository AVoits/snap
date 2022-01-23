import {ChunkCurve, Coordinate, CurveLine} from "./tracks.model";
// import * as Snap from "snapsvg";
import {getPath, setCurve} from "./createCurve";
import {setControls} from "./control/control";
import * as Snap from "snapsvg";
import {mapCoordinateToCurveLine} from "./mapCoordinateToCurveLine";
import {mapPathToCurve} from "./mapPathToCurve";
import {CONTROL_DISTANCE} from "./tracks.const";

export const makeTracks = (s: Snap.Paper, coordinates: Coordinate[]) => {

    // @ts-ignore
    gsap.registerPlugin(Draggable);
    // @ts-ignore
    gsap.registerPlugin(TextPlugin);

    if (coordinates.length < 2) {
        s.text(100, 100, 'Oops!')
            .attr({stroke: '#FF00F4FF', 'strokeWidth': 1, fill: 'none', opacity: 0.8});
        return;
    }

    const initial = mapCoordinateToCurveLine(coordinates)
    setCurve(s, initial)
    setControls(s, initial)

    makeDraggable(initial)

    function makeDraggable(initial: CurveLine) {
        const l = initial.points.length + 1


        for (let i = 0; i <= l; i++) {
            const anchor = document.getElementById(`anchor-${i}`);
            const cp1 = document.getElementById(`control-start-${i}`);
            const cp2 = document.getElementById(`control-end-${i}`);

            // @ts-ignore
            Draggable.create(anchor, {
                bounds: document.getElementById("svg"),
                onDrag() {
                    updateCurveByAnchor(i, this.deltaX, this.deltaY);
                }
            });
            // @ts-ignore
            Draggable.create(cp1, {
                bounds: document.getElementById("svg"),
                onDrag() {
                    updateCurveByControlStart(i, this.deltaX, this.deltaY);
                }
            });
            // @ts-ignore
            Draggable.create(cp2, {
                bounds: document.getElementById("svg"),
                onDrag() {
                    updateCurveByControlEnd(i, this.deltaX, this.deltaY);
                }
            });
        }
    }

    function updateCurveByAnchor(id: number, x: number, y: number) {
        const path = document.getElementById("CurvePath")
        const currentPath = Snap.parsePathString(path.getAttribute('d'))
        const curve: CurveLine = mapPathToCurve(currentPath)

        let newStart = {...curve.start}
        let newPoints = curve.points.map(point => ({...point}))


        if (id === 0) {
            newStart = {
                x: curve.start.x + x,
                y: curve.start.y + y
            }

        } else {
            newPoints[id - 1].endpoint = {
                x: curve.points[id - 1].endpoint.x + x,
                y: curve.points[id - 1].endpoint.y + y
            }
        }


        const newCurve: CurveLine = {
            start: newStart,
            points: newPoints
        }

        const newPath = getPath(newCurve)
        path.setAttribute("d", newPath)

        if (id + 1 !== currentPath.length && id !== 0) {
            // @ts-ignore
            gsap.set(`#line-start-${id + 1}`,
                {
                    attr: {
                        x2: newPoints[id - 1].endpoint.x,
                        y2: newPoints[id - 1].endpoint.y,
                    }
                });
        }

        if (id !== 0) {
            // @ts-ignore
            gsap.set(`#line-end-${id}`,
                {
                    attr: {
                        x2: newPoints[id - 1].endpoint.x,
                        y2: newPoints[id - 1].endpoint.y,
                    }
                });
        } else {
            // @ts-ignore
            gsap.set(`#line-start-${id + 1}`,
                {
                    attr: {
                        x2: newStart.x,
                        y2: newStart.y,
                    }
                });
        }
    }

    function updateCurveByControlStart(id: number, x: number, y: number) {
        const path = document.getElementById("CurvePath")
        const currentPath = Snap.parsePathString(path.getAttribute('d'))
        const curve: CurveLine = mapPathToCurve(currentPath)

        let newStart = {...curve.start}
        let newPoints = curve.points.map(point => ({...point}))

        newPoints[id - 1].c1 = {
            x: curve.points[id - 1].c1.x + x,
            y: curve.points[id - 1].c1.y + y
        }

        const newCurve: CurveLine = {
            start: newStart,
            points: newPoints
        }

        const newPath = getPath(newCurve)
        path.setAttribute("d", newPath)

        // @ts-ignore
        gsap.set(`#line-start-${id}`,
            {
                attr: {
                    x1: newPoints[id - 1].c1.x,
                    y1: newPoints[id - 1].c1.y,
                }
            });
    }

    function updateCurveByControlEnd(id: number, x: number, y: number) {
        const path = document.getElementById("CurvePath")
        const currentPath = Snap.parsePathString(path.getAttribute('d'))
        const curve: CurveLine = mapPathToCurve(currentPath)

        let newStart = {...curve.start}
        let newPoints = curve.points.map(point => ({...point}))

        newPoints[id - 1].c2 = {
            x: curve.points[id - 1].c2.x + x,
            y: curve.points[id - 1].c2.y + y
        }

        const newCurve: CurveLine = {
            start: newStart,
            points: newPoints
        }

        const newPath = getPath(newCurve)
        path.setAttribute("d", newPath)

        // @ts-ignore
        gsap.set(`#line-end-${id}`,
            {
                attr: {
                    x1: newPoints[id - 1].c2.x,
                    y1: newPoints[id - 1].c2.y,
                }
            });
    }
}



