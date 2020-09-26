// interface IUserAccount {
//     firstName: string;
//     age: number;
// }
//
// let person: IUserAccount = IUserAccount;


// let account = {
//     firstName: 'Ihor',
//     age: 34
// }
//
// let user: (typeof account) = account;
//
//
// class Point {
//
// }
//
// let p: Point = new Point();

// let a: number;
//
// a = '1'

// let a = 1;
// a = 's'

let num: number | null = 1
num = 0x0101;
num = Infinity;
num = NaN;
num = null;


let b: boolean = true;

let s: string = 's';
s = `${num}`;


let nill: null = null;
let und: undefined = undefined;

let bigInt: bigint = 4n;

let key1: symbol = Symbol('key1');
const key2: unique symbol = Symbol('key2');
const key3 = Symbol('key3');

let strictObj = {
    [key1]: 100,
    [key2]: 100,
    [key3]: 100,
}

let v1 = strictObj[key1];
let v2 = strictObj[key2];
let v3 = strictObj[key3];
