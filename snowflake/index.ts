import {setBgCircles} from "./bgCircles";
import {getMinAngle} from "./utils/mathCoordinates";
import {RADIUS, RADIUS_ITEM} from "./consts/measurements.consts";
import {AnimationFn, ItemProps} from "./models/trees.model";
import {makeCoordinates} from "./coordinates";
import {style} from "./stylesSvg";
import {src} from "./dataGenerate";
import Snap = require("snapsvg");


export const snowflake = (s, imageURL) => {


    s.attr({viewBox: "-500 -450 1300 900"});
    setBgCircles(s)
    const minAngle = getMinAngle(RADIUS.R4 - RADIUS.R3, RADIUS_ITEM.R2)


    const setLevel = (item: ItemProps[]) => {

        const level4 = makeCoordinates(item, RADIUS.R4, minAngle.grad);

        const level4Items = level4.map((el) => {
            return makeSVG(el, RADIUS.R3, 0, onClickTest)
        })
        const target = s.select('#selectedItem')
        const g = s.group(...level4Items).attr({id: 'test'});
        target.add(g)
    }

    const onClickTest: AnimationFn = (params) => {
        const {item, circle, line} = params

        const subLevel = Snap("#test")
        subLevel && subLevel.remove()

        //reset circle
        const test = s.selectAll('.circle')
        test.animate({r: 20}, 500)

        const rotateAngle = item.center.grad <= 180 ? -item.center.grad : 360 - item.center.grad

        group
            .animate({transform: `r${rotateAngle}, 0, 0`}, 600);

        circle
            .attr({class: 'circle'})
            // .transform('s2')
            // .transform('t0 100')
            .animate({transform: `s2`}, 500, mina.easeout, () => setLevel(item.children));
    }

    const makeSVG = (item: ItemProps, lineStartX, lineStartY, onClick?: AnimationFn) => {

        const line = s.line(lineStartX, lineStartY, item.center.posX, item.center.posY)
            .attr(style.line);

        const r = item.level === 2 ? RADIUS_ITEM.R1 : RADIUS_ITEM.R2


        const circle = s.circle(item.center.posX, item.center.posY, r)
            .attr(style.circle)

        const avatar = s.image(imageURL, item.center.posX - r, item.center.posY - r, 2 * r, 2 * r)
        const group = s.group(line, circle, avatar)

        if (item.level === 3) {
            avatar.click(() => onClick({item, circle, line}));
        }

        return group;
    }

    s.g().attr({id: 'selectedItem'})


    const level1 = src.map((item: ItemProps) => {
        const levelItems = item.children.map(el => {
            return makeSVG(el, item.center.posX, item.center.posY, onClickTest)
        })

        const test = makeSVG(item, 0, 0, onClickTest)
        return s.group(...levelItems, test)
    })

    const mayor = s.circle(0, 0, RADIUS_ITEM.R0).attr(style.center);
    const group = s.group(...level1, mayor)


    const aim = s.circle(RADIUS.R3, 0, 30).attr(style.polygon);
}
