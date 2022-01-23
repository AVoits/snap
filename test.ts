// function qwe(a: number, b: number): number {
//
// }
//
// function qwe(a: string, b: string): string {
//
// }

function qwe(a: number, b: number): number
function qwe(a: string, b: string): string
function qwe(a: string|number, b: string|number): string|number {
    if(typeof a === 'number'){
        return a * b
    }

    if(typeof a === 'string' && typeof b === 'string') {
        return a + b
    }

    throw new Error()
}


// constructors

// c++
// class Qwe {
//     int q;
//
//     set(int q) {
//         this.q = q;
//     }
// }
//
// Qwe qwe = new Qwe;
// qwe.set(12)
//
// class Qwe {
//     int q;
//
//     Qwe(int q) {
//         this.q = q;
//     }
// }
// Qwe = new Qwe(1);


class Qwe1 {
    i: number;

    setI(a: number) {
        this.i = a;
    }
}


const qwe1  = new Qwe1()
qwe1.setI(6)

class Qwe2 {
    i: number;

    constructor(a: number) {
        this.i = a;
    }
}

const qwe2  = new Qwe2(4)

function Qwe3() {}
Qwe3.prototype.setI = function(i: number) { this.i = i }

function Qwe4(i:number) { this.i = i }


///

function Qwe5() {
    this.i = null

    /**
     * @param {number} i
     */
    this.setI = function(i) {
        this.i = i
    }
}

function newNew1(ctor) {
    const res = {}
    ctor.call(res);
    return res;
}

const qwe5 = newNew1(Qwe5)
qwe5.setI(5)

///

const myParent = { a: 7 }
const child = Object.create(myParent)



///
const Qwe6Methods = {
    setI: function(i) {
        this.i = i
    }
}
const anotherMethods = {
    setB: function(i) {
        this.i = i
    }
}

function Qwe6() {
    this.i = null
}

function newNew2(ctor, methods) {
    const res = Object.create(methods)
    ctor.call(res);
    return res;
}


const qwe6 = newNew2(Qwe6, Qwe6Methods)
const qwe62 = newNew2(Qwe6, anotherMethods)
const qwe63 = newNew2(Qwe6, anotherMethods)
qwe6.setI(6)

///


function Qwe7() {
    this.i = null
}

Qwe7.methods = {
    setI: function(i) {
        this.i = i
    },
    getI: function (){
        return this.i
    },
    arrFn: () => 'hahahah'
}

function newNew3(ctor) {
    const res = Object.create(ctor.methods)
    ctor.call(res);
    return res;
}

///

function Qwe8() {
    this.i = null
}

Qwe7.prototype = {
    setI: function(i) {
        this.i = i
    },
    getI: function (){
        return this.i
    }
}

function newNew4(ctor) {
    const res = Object.create(ctor.prototype)
    ctor.call(res);
    return res;
}



function CtorParent() {
    this.i = null
}

CtorParent.prototype = {
    setI: function(i) {
        this.i = i
    }
}

function CtorChild(q) {
    this.j = q
}

CtorChild.prototype = {
    setJ: function(j) {
        this.j = j
    }
}

CtorChild.prototype.setPrototypeOf(CtorParent.prototype)


function inherit(ctorParent, ctorChild) {
    const child = Object.create(myParent) // {} но с нужным предком
    const res = Object.assign(child, ctorChild.prototype) // объект с нужным предком и с прототипом CtorChild


    // function newNew4(ctor) {
    //     const res = Object.create(ctor.prototype)
    //     ctor.call(res);
    //     return res;
    // }

    function CtorAdditional() {
        // this = { __proto__: res }
        // кража конструктора
        ctorParent.call(this)
        ctorChild.apply(this, arguments)
    }

    CtorAdditional.prototype = res

    return CtorAdditional
}

CtorChild = inherit(CtorParent, CtorChild)

new CtorChild(555)
