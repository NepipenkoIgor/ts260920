// TODO * readonly by field name
type NonReadonlyButOptional<T> = {
    -readonly [P in keyof T]?: T[P]
}

interface IUser {
    readonly name: string;
    readonly age: number;
    info: {
        male: boolean
    },
    subjects: string[]
}

let admin: Partial<IUser> = {
    name: 'Hong',
    subjects: ['TS', 'JS']
}

let user: NonReadonlyButOptional<IUser> = {
    name: 'Ihor',
    // age: 34,
}

user.age = 35

type someType<E, T, P extends keyof T> = E extends T[P] ? never : P
type RemoveByType<T, E> = {
    [P in keyof T]: someType<E, T, P>
}[keyof T]
/*
 1 ->  name: IUser['name'] =>  string extends    string => never
       name: never

 2 ->  age: IUser['age'] =>  string extends    number => age
       age: 'age'

 3 ->  info: IUser['info'] =>  string extends    { male: boolean } => info
       info: 'info'
 4 ->  subjects: IUser['subjects'] =>  string extends     string[] => subjects
       subjects: 'subjects'

 5 =>  age | info | subjects
 */

const p: IUser[ 'age' | 'info' | 'subjects'] = true  // name | age | subjects

let a: IUser['name'] = true;
