// Object/Function

// interface IAccount {
//     firstName: string;
//     age: number
// }
//
// type TAccount = {
//     firstName: string;
//     age: number
// }
//
// interface IFn {
//    new  (a: number, b: number): number
// }
//
// type TFn = new (a: number, b: number) => number


// Extends

interface IX {
    x: number;
}

interface IY {
    y: { yz: number }
}

type TX = { x: number, y: { yx: string } };
type TY = { y: { yz: number } };
// y =>  {yz: number } & { yx: string }
type TPoint = TX & TY & { z: number; }


interface IPoint extends TX, TY, TAccount {
    y: { yz: number, yx: string }
    z: number;

    sum(): number;
}

// let p1: TPoint = {
//     x: 1,
//     y: 1,
//     z: 1
// }
// let p2: IPoint = {
//     x: 1,
//     y: 1,
//     z: 1
// }

// implements
type literal =string| number

class Point implements TAccount {
    name = 'Ihor';
    age = 34;
}


type TAccount = {
    name: string;
}


type TAccount = {
    age: number;
}


interface IAccount {
    name: string;
}


let account: IAccount = {
    name: 'Ihor',
    age: 34
}


interface IAccount {
    age: number;
}
