import {Coordinate, Curve, CurveLine} from "./tracks.model";

export const mapPathToCurve = (curve: any[]): CurveLine => {


    // 0: (3) ['M', 100, 200]
    // 1: (7) ['C', 100, 100, 300, 350, 300, 250]
    // 2: (7) ['C', 300, 150, 450, 550, 450, 450]
    // 3: (7) ['C', 450, 350, 650, 200, 650, 300]

    const [startItem, ...rest] = curve

    const start: Coordinate = {
        x: startItem[1],
        y: startItem[2],
    }

    const points: Curve[] = rest.map((value) => {
        const [type, c1x, c1y, c2x, c2y, endX, endY] = value;
        return {
            c1: {
                x: c1x,
                y: c1y,
            },
            c2: {
                x: c2x,
                y: c2y,
            },
            endpoint: {
                x: endX,
                y: endY
            }
        }
    })
    // console.log({start, points});
    return {start, points}
}