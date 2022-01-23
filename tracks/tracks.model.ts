export interface Coordinate {
    x: number
    y: number
}

export interface Point extends Coordinate {
    controlStart?: Coordinate
    controlEnd?: Coordinate
}

export type Chunk = [Coordinate, Coordinate]





export interface Curve {
    c1: Coordinate,
    c2: Coordinate,
    endpoint: Coordinate
}

export interface CurveLine {
    start: Coordinate,
    points: Curve[]
}

export interface ChunkCurve {
    start: Coordinate,
    end: Coordinate,
    c1: Coordinate,
    c2: Coordinate,
    index: number
}