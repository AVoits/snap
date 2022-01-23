import {Coordinate, Curve, CurveLine} from "./tracks.model";
import {CONTROL_DISTANCE} from "./tracks.const";

export const mapCoordinateToCurveLine = (coordinates: Coordinate[]): CurveLine => {
    const [start, ...rest] = coordinates;

    const points: Curve[] = rest.map((item, index) => {
        const prevPoint = index === 0 ? start : rest[index - 1]

        return {
            c1: {
                x: prevPoint.x,
                y: prevPoint.y - CONTROL_DISTANCE
            },
            c2: {
                x: item.x,
                y: item.y + CONTROL_DISTANCE
            },
            endpoint: item
        }
    })

    return {start, points}
}