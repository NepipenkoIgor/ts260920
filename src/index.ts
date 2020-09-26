// function fn(a, b){}
//
// fn(1, 2);
// fn('asd', true)
// type/interface/function/class
type TInfo = { male: boolean, phone: string }

interface IUser<Info extends TInfo = TInfo, ID = number> {
    id: ID,
    name: string
    info: Info
}

let user: IUser = {
    id: 123,
    name: 'Valentin',
    info: {
        male: true,
        phone: '123123123'
    }
}

let admin: IUser<{ subjects: string[]} & TInfo, string> = {
    id: '1231asdads1241',
    name: 'Elena',
    info: {
        subjects: ['js', 'ts'],
        male: true,
        phone: '123123123'
    }
}


let arr: Array<number>
