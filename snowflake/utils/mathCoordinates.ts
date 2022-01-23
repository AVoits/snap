// перевод градусов в радианы
export const getRad = (ang: number): number => {
    return (ang * Math.PI) / 180
}

// расчет декартовых координат точки по углу (в радианах) и радиусу круга
export const getCartesian = (r: number, angle: number) => {
    const f = getRad(angle)
    const posX = Math.round(r * Math.cos(f))
    const posY = Math.round(r * Math.sin(f))
    return {posX, posY}
}


// получение декартовых координат точки по углу (в радианах) и радиусу круга
export const getPoint = (r: number, angle: number) => {
    const {posX, posY} = getCartesian(r, angle)
    return {
        grad: angle,
        posX,
        posY
    }
}


// расчет минимального угла (здесь: для третьего круга) на основании радиуса точки
// теорема косинусов :)
// cos(α) = (b2 + c2 — a2) / 2bc

export const getMinAngle = (length: number, radius: number) => {
    // padding - рассточние между точками на окружности, прибавляется с каждой стороны точки,
    // те между точками будет двойной padding
    // его можно вычитать, тогда еще плотнее будут точки
    const padding = 1
    const sideA = radius + padding * 2
    const sideB = length
    const sideC = length

    const ang = (Math.pow(sideB, 2) + Math.pow(sideC, 2) - Math.pow(sideA, 2)) / (2 * sideB * sideC)

    const RADIAN = Math.acos(ang);
    const GRADS = RADIAN * 180 / Math.PI;

    return { rad: RADIAN, grad: GRADS }
}