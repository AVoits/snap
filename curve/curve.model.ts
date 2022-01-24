export interface Coordinate {
    x: number
    y: number
}

export interface CurveData {
    start: Coordinate,
    cStart?: Coordinate,
    end: Coordinate,
    cEnd?: Coordinate,
}
