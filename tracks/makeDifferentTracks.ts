import * as Snap from "snapsvg";
import {ChunkCurve, Coordinate} from "./tracks.model";
import {CONTROL_DISTANCE} from "./tracks.const";



export function makeDifferentTracks (s: Snap.Paper, coordinates: Coordinate[]){
    // @ts-ignore
    gsap.registerPlugin(Draggable);
    // @ts-ignore
    gsap.registerPlugin(TextPlugin);

    const initial = getInit(coordinates)

    drawData(s, initial, coordinates)

    makeDraggable(initial)
}




function getPathOne (val: ChunkCurve): string {
    const M = `M ${val.start.x},${val.start.y}`
    const C = `C${val.c1.x},${val.c1.y} ${val.c2.x},${val.c2.y} ${val.end.x},${val.end.y}`
    return `${M} ${C}`
}

function clickTest(e, coordinates: Coordinate[], id: number, s){
    // console.log(e.x, e.y)

    const newPoint: Coordinate = {
        x: e.x, y: e.y
    }

    coordinates.splice(id + 1, 0, newPoint)

    s.clear()
    makeDifferentTracks(s, coordinates)
}


function drawData(s: Snap.Paper, initial: ChunkCurve[], coordinates: Coordinate[]){

    initial.map((val, index) =>  {
        const path = getPathOne(val)

        s.path(path)
            .click((e) => clickTest(e, coordinates, index, s))
            .attr({ stroke: '#FF00F4FF', 'strokeWidth': 4, fill:'none', opacity: 0.8, id: `path-${index}`});




        s.circle(val.c1.x, val.c1.y, 5)
            .attr({fill: 'red', id: `control-start-${index}`});
        s.line(val.c1.x, val.c1.y, val.start.x, val.start.y)
            .attr({stroke: 'red', 'strokeWidth': 1, id: `control-start-${index}`});


        s.circle(val.c2.x, val.c2.y, 5)
            .attr({fill: 'green', id: `control-start-${index}`});
        s.line(val.c2.x, val.c2.y, val.end.x, val.end.y)
            .attr({stroke: 'green', 'strokeWidth': 1, id: `control-start-${index}`});

        s.circle(val.start.x, val.start.y, 10)
            .attr({fill: 'pink', id: `anchor-${index}`});

        if(index === initial.length - 1) {
            s.circle(val.end.x, val.end.y, 10)
                .attr({fill: 'pink', id: `anchor-${index + 1}`});
        }
    })
}

function getInit (coordinates: Coordinate[]):ChunkCurve[] {
    const initial:ChunkCurve[]  = []

    for (let i = 0; i < coordinates.length - 1; i++) {
        // M100,100 C150,20 200,180 280,140

        const startItem = coordinates[i]
        const endItem = coordinates[i + 1]

        const line: ChunkCurve = {
            start: startItem,
            end: endItem,
            c1: {
                x: startItem.x,
                y: startItem.y - CONTROL_DISTANCE
            },
            c2: {
                x: endItem.x,
                y: endItem.y + CONTROL_DISTANCE
            },
            index: i,
        }

        initial.push(line)
    }

    return initial
}

function makeDraggable(coordinates: ChunkCurve[]) {

    for (let i = 0; i < coordinates.length; i++) {
        const anchor = document.getElementById(`anchor-${i}`);

        // @ts-ignore
        Draggable.create(anchor, {
            bounds: document.getElementById("svg"),
            onDrag() {
                updateCurveByAnchor(i, this.deltaX, this.deltaY);
            }
        });
    }
}

function mapSnapToChunkCurve(data: any[], index): ChunkCurve{
    // ['M', 450, 650]
    // ['C', 450, 550, 650, 600, 650, 500]
    const [M, C] = data


    console.log(M, C)


    return {
        start: {
            x: M[1],
            y: M[2]
        },
        end: {
            x: C[5],
            y: C[6]
        },
        c1: {
            x: C[1],
            y: C[2]
        },
        c2: {
            x: C[3],
            y: C[4]
        },
        index
    }
}

function updateCurveByAnchor(id: number, x: number, y: number) {

    const pathRight = document.getElementById(`path-${id}`)
    const currentRight = Snap.parsePathString(pathRight.getAttribute('d'))
    const right = mapSnapToChunkCurve(currentRight, id)

    const pathLeft = document.getElementById(`path-${id - 1}`)
    const currentLeft = Snap.parsePathString(pathLeft.getAttribute('d'))
    const left = mapSnapToChunkCurve(currentLeft, id - 1)

    console.log('right', right)
    console.log('left', left)

    let newRight = {...right}
    let newLeft = {...left}

    newRight.start = {
        x: right.start.x + x,
        y: right.start.y + y,
    }

    newLeft.end = {
        x: left.end.x + x,
        y: left.end.y + y,
    }

    const newPathRight = getPathOne(newRight)
    const newPathLeft = getPathOne(newLeft)

    pathRight.setAttribute("d", newPathRight)
    pathLeft.setAttribute("d", newPathLeft)

}