import {Chunk, Coordinate, Point} from "./tracks.model";
import {CONTROL_DISTANCE} from "./tracks.const";
import * as Snap from "snapsvg";
import {mapPathToCurve} from "./mapPathToCurve";

export const getMiddleDot = (point1: Coordinate, point2: Coordinate) => {
    return {
        x: (point1.x + point2.x) / 2,
        y: (point1.y + point2.y) / 2
    }
}

export const getQBCPoint = (pointA: Coordinate, pointB: Coordinate) => {

    const ab = CONTROL_DISTANCE
    const bc = Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2));

    // первый изгиб всегда вверх, поэтому по х +, по у -
    // если надо вниз, то
    // x: pointA.x - ab...
    // y: pointA.y + ab...

    return {
        x: pointA.x + ab * (pointB.y - pointA.y) / bc,
        y: pointA.y - ab * (pointB.x - pointA.x) / bc
    }
}

export const getChunks = (arr: Coordinate[]): [Coordinate, Coordinate][] => {
    // типа для улучшения работы с памятью
    const result = new Array(arr.length - 1)

    for (let i = 0; i < arr.length - 1; i++) {
        result[i] = [arr[i], arr[i + 1]]
    }

    return result
}

export const mapCurveDataFromChunks = (chunks: [Coordinate, Coordinate][]): [Coordinate, Coordinate][] => {
    return chunks.map((chunk, index) => {
        const [first, second] = chunk

        if(index % 2 === 0) {

            const newFirst = {
                ...first,
                controlX: first.x,
                controlY:  first.y - CONTROL_DISTANCE,
                chunkId: `chunk${index}`
            }

            const newSecond = {
                ...second,
                controlX: second.x,
                controlY:  second.y - CONTROL_DISTANCE,
                chunkId: `chunk${index}`
            }

            return [newFirst, newSecond]

        }

        const newFirst = {
            ...first,
            controlX: first.x,
            controlY:  first.y + CONTROL_DISTANCE,
            chunkId: `chunk${index}`
        }

        const newSecond = {
            ...second,
            controlX: second.x,
            controlY:  second.y + CONTROL_DISTANCE,
            chunkId: `chunk${index}`
        }

        return [newFirst, newSecond]
    })
}




export const makeCurveData = (points: Coordinate[]): Point[] => {
    return points.map(( value, index, array) => {
        if(index === 0) {
            return {
                ...value,
                controlStart: {
                    x: value.x,
                    y: value.y - CONTROL_DISTANCE
                }
            }
        }
        if(index === array.length - 1) {
            return {
                ...value,
                controlEnd: {
                    x: value.x,
                    y: value.y - CONTROL_DISTANCE
                }
            }
        }

        return  {
            ...value,
            controlStart: {
                x: value.x,
                y: value.y - CONTROL_DISTANCE
            },
            controlEnd: {
                x: value.x,
                y: value.y + CONTROL_DISTANCE
            }
        }
    })
}


export const updateCurveData = (currentCurve: Point[], id: number, data: Point) => {
    const curve = getCurrentCurve()
    console.log(curve)

    mapPathToCurve(curve)


    const newCurveData = [...currentCurve];
    newCurveData[id] = data;
    return newCurveData
}


export const getCurrentCurve = () => {
    const path = document.getElementById("CurvePath").getAttribute('d')
    return  Snap.parsePathString(path)
}