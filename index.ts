import {Coordinate} from "./tracks/tracks.model";
import {Controller} from "./curve/controller";
import {CurveData} from "./curve/curve.model";
import Snap = require("snapsvg");

const example: Coordinate[] = [
    {x: 100, y: 350},
    {x: 250, y: 300},
    {x: 400, y: 350},
    {x: 650, y: 500},
    {x: 800, y: 350},
]

// @ts-ignore
const test = Array.from(document.querySelectorAll('path')).map(i => i.getAttribute('d'))
const mapPathToCurveData = (arr: string[]): CurveData[] => {
    return  arr.map((item) => {
        const data = Snap.parsePathString(item)
        // ['M', 94, 383]
        // ['C', 116, 274, 229, 256, 173, 189]
        const [M, C] = data

        const curvedata: CurveData = {
            start: {x: M[1], y: M[2]},
            end: {x: C[5], y: C[6]},
            cStart: {x: C[1], y: C[2]},
            cEnd: {x: C[3], y: C[4]},
        }

        return curvedata
    })
}
const initData__ = mapPathToCurveData(test)


const initData = [
    {
        "start": {
            "x": 94,
            "y": 383
        },
        "end": {
            "x": 173,
            "y": 189
        },
        "cStart": {
            "x": 116,
            "y": 274
        },
        "cEnd": {
            "x": 229,
            "y": 256
        }
    },
    {
        "start": {
            "x": 173,
            "y": 189
        },
        "end": {
            "x": 145,
            "y": 456
        },
        "cStart": {
            "x": 95,
            "y": 128
        },
        "cEnd": {
            "x": 215,
            "y": 344
        }
    },
    {
        "start": {
            "x": 145,
            "y": 456
        },
        "end": {
            "x": 232,
            "y": 467
        },
        "cStart": {
            "x": 184,
            "y": 162
        },
        "cEnd": {
            "x": 259,
            "y": 388
        }
    },
    {
        "start": {
            "x": 232,
            "y": 467
        },
        "end": {
            "x": 321,
            "y": 318
        },
        "cStart": {
            "x": 285,
            "y": 389
        },
        "cEnd": {
            "x": 388,
            "y": 351
        }
    },
    {
        "start": {
            "x": 321,
            "y": 318
        },
        "end": {
            "x": 351,
            "y": 430
        },
        "cStart": {
            "x": 253,
            "y": 286
        },
        "cEnd": {
            "x": 264,
            "y": 538
        }
    },
    {
        "start": {
            "x": 351,
            "y": 430
        },
        "end": {
            "x": 409,
            "y": 188
        },
        "cStart": {
            "x": 407,
            "y": 350
        },
        "cEnd": {
            "x": 482,
            "y": 174
        }
    },
    {
        "start": {
            "x": 409,
            "y": 188
        },
        "end": {
            "x": 416,
            "y": 450
        },
        "cStart": {
            "x": 363,
            "y": 197
        },
        "cEnd": {
            "x": 362,
            "y": 392
        }
    },
    {
        "start": {
            "x": 416,
            "y": 450
        },
        "end": {
            "x": 503,
            "y": 189
        },
        "cStart": {
            "x": 448,
            "y": 493
        },
        "cEnd": {
            "x": 557,
            "y": 240
        }
    },
    {
        "start": {
            "x": 503,
            "y": 189
        },
        "end": {
            "x": 491,
            "y": 448
        },
        "cStart": {
            "x": 440,
            "y": 192
        },
        "cEnd": {
            "x": 454,
            "y": 377
        }
    },
    {
        "start": {
            "x": 491,
            "y": 448
        },
        "end": {
            "x": 552,
            "y": 388
        },
        "cStart": {
            "x": 503,
            "y": 459
        },
        "cEnd": {
            "x": 544,
            "y": 494
        }
    },
    {
        "start": {
            "x": 552,
            "y": 388
        },
        "end": {
            "x": 621,
            "y": 413
        },
        "cStart": {
            "x": 569,
            "y": 511
        },
        "cEnd": {
            "x": 614,
            "y": 464
        }
    },
    {
        "start": {
            "x": 621,
            "y": 413
        },
        "end": {
            "x": 552,
            "y": 388
        },
        "cStart": {
            "x": 639,
            "y": 293
        },
        "cEnd": {
            "x": 547,
            "y": 287
        }
    },
    {
        "start": {
            "x": 552,
            "y": 388
        },
        "end": {
            "x": 721,
            "y": 312
        },
        "cStart": {
            "x": 600,
            "y": 340
        },
        "cEnd": {
            "x": 726,
            "y": 413
        }
    }
]


const controller = new Controller(initData)
controller.draw()


