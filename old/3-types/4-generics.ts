// function fn(a, b){}
//
// fn(1, 2);
// fn('asd', true)
// type/interface/function/class
// type TInfo = { male: boolean, phone: string }
//
// interface IUser<Info extends TInfo = TInfo, ID = number> {
//     id: ID,
//     name: string
//     info: Info
// }
//
// let user: IUser = {
//     id: 123,
//     name: 'Valentin',
//     info: {
//         male: true,
//         phone: '123123123'
//     }
// }
//
// let admin: IUser<{ subjects: string[]} & TInfo, string> = {
//     id: '1231asdads1241',
//     name: 'Elena',
//     info: {
//         subjects: ['js', 'ts'],
//         male: true,
//         phone: '123123123'
//     }
// }
//
//
// let arr: Array<number>


interface IUser {
    name: string;
    age: number;
}

interface IProduct {
    title: string;
    price: number;
}

interface IState {
    user: IUser;
    products: IProduct[]
}

const state: IState = {
    user: {name: 'Ihor', age: 34},
    products: [{title: 'IPhone XR', price: 600}]
}

type Select<State> = <Field extends keyof State>(storePath: State, field: Field) => State[Field];

const select:  Select<IState> = (storePath, field) => storePath[field];

const user: IUser = select(state, 'user');
const products: IProduct[] = select(state, 'products');


let a: Array
