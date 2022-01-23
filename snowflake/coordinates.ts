import {getMinAngle, getPoint} from "./utils/mathCoordinates";
import {ItemProps} from "./models/trees.model";
import {RADIUS, RADIUS_ITEM} from "./consts/measurements.consts";


const getItemEvenly = (angle: number, index: number, startFirst: number) => {
    const startChild = startFirst + angle + index * angle
    const endChild = startChild + angle
    const centerChild = ((endChild - startChild) / 2) + startChild

    return { startChild, endChild, centerChild}
}

const getItemMinAngle = (angle: number, index: number, center: number, length: number) => {

    const halfArc = (angle * length) / 2

    const startFirstChild = center - halfArc
    const startChild = startFirstChild + index * angle
    const endChild = startChild + angle
    const centerChild = ((endChild - startChild) / 2) + startChild


    return { startChild, endChild, centerChild}
}


export const mapCustomTree = (data) => {
    const level1: ItemProps[] = data.children;
    const level2 = level1.map((item) => item.children);
    // @ts-ignore
    const lev2: number = level2.flat().length
    const angle: number = 360 / lev2


    const groups = level1.reduce((acc, item) => {

        // @ts-ignore
        const itemsOnLevel = item.children.flat().length
        const nextCount = acc.prev + itemsOnLevel

        const start = acc.prev * angle
        const end = itemsOnLevel * angle + start
        const center = ((end - start) / 2) + start

        const startFirstChild = start
        const minAngle = getMinAngle(RADIUS.R3 - RADIUS.R2, RADIUS_ITEM.R2)



        const children = item.children.map((el, index) => {

            const radiusChild = RADIUS.R3
            const els = item.children.length + 2
            const currentAngle = (end - start) / els

            const treeType = true

            const tree = treeType ?
                getItemEvenly(currentAngle, index, startFirstChild) :
                getItemMinAngle(minAngle.grad, index, center, item.children.length)

            const { startChild, endChild, centerChild} = tree;

            const result: ItemProps = {
                name: el.name,
                level: el.level,
                children: el.children,
                center: getPoint(radiusChild, centerChild),
                end: getPoint(radiusChild, endChild),
                start: getPoint(radiusChild, startChild),
            }

            return result
        })

        const el = {
            name: item.name,
            level: item.level,
            children: children,
            center: getPoint(RADIUS.R2, center),
            end: getPoint(RADIUS.R2, end),
            start: getPoint(RADIUS.R2, start),
        }

        return {
            prev: nextCount,
            list: [...acc.list, el]
        }
    }, {prev: 0, list: []})

    return groups.list
}


export const makeCoordinates = (items: ItemProps[], radius: number, angle: number): ItemProps[] => {
    const halfArcStart = (items.length * angle) / 2

    return items.map((el, index) => {

        const start = halfArcStart - index * angle - angle
        const end = start + angle
        const center = ((end - start) / 2) + start

        return {
            name: el.name,
            level: el.level,
            children: [],
            center: getPoint(radius, center),
            end: getPoint(radius, end),
            start: getPoint(radius, start),
        }
    })
}