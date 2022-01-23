import * as Snap from "snapsvg";

export interface ItemBase {
    name: string
    level: number
    children?: ItemProps[]
}

export interface ItemProps extends ItemBase{
    start: Coordinates
    end: Coordinates
    center: Coordinates
}

export interface Coordinates {
    grad: number
    posX: number
    posY: number
}



export interface AnimationParams {
    item: ItemProps
    circle: Snap.Element
    line: Snap.Element
}
export type AnimationFn = (params: AnimationParams) => void