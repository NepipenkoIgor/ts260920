const user: {
    readonly firstName: string;
    readonly age?: number;
} = {
    firstName: 'Ihor',
    age: 34
}

user.age = 35;

let keys: keyof typeof user = 'age';
let val: (typeof user)['firstName'] = 1;


let userHash: {
    [id: string]: typeof user
} = {
    '123asdas123124': {
        firstName: 'Ihor',
        age: 34
    },
    '123as33sdsfs123124': {
        firstName: 'Ihor',
        age: 34
    },
}
type numArray = number[];
let arr: readonly number[] = [1, 2, 3, 4, 5];
arr[100] = 1;
arr.push(1)

let tupleType: readonly [string, number] = ['sd', 1];
tupleType[100] = 1;
tupleType.push(1)


// enum A {
//     B = 'key',
//     C = 'key1',
// }
//
// let foo: {
//     key: string;
//     key1: string;
// } = {
//     'key': 'value',
//     'another_key': 'another_value',
//     'key1': 'value1',
// };


let x = 10 as const;
x  = 11;
let b: typeof x = 11;


let y = [10, 20] as const;  // readonly [10, 20]
y[100] = 1;
y.push()

let z = {text : 'hi TS', info: {male: true}} as const;
z.text = 'sadads';
z.info.male = false;
