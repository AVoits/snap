import {mapCustomTree} from "./coordinates";

const data = {
    name: '1',
    level: 1,
    children: []
};

const levels = 4

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


const getChildren = (level) => {
    if (level < levels) {
        const items = Math.round(getRandomArbitrary(4, 7));
        // @ts-ignore
        const ch = new Array(items).fill('0')

        return ch.map((item, index) => {
            return { name: `${level + 1}-${ index + 1}`, children: getChildren(level + 1), level: level + 1 }
        })
    }

    return []
}

data.children = getChildren(1)
export const src = mapCustomTree(data);


