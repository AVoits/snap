import * as Snap from "snapsvg";


export const drawPlainPath = (s: Snap.Paper, path: string) => {
    s.path(path)
        .attr({ stroke: 'gray', 'strokeWidth': 1, fill:'none', opacity: 0.5, id: 'PlainPath'});
}


export const drawCurvePath = (s: Snap.Paper, path: string) => {
    const curve = s.path(path)
        .attr({ stroke: '#FF00F4FF', 'strokeWidth': 4, fill:'none', opacity: 0.8, id: 'CurvePath'});

    function clickTest(e){
        console.log(e)
        Snap.path.getTotalLength(path)
        console.log(Snap.path.getTotalLength(path))
    }

    curve.click(clickTest)
}
