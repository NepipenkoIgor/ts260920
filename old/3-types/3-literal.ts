// let digit: 1 | 2 | 3 | 4 | 5;
// digit = 1;
//
// type AnimationType = 'ease-in' | 'ease-out'
//
// enum AnimationTypeEnum {
//     EASE_IN = 'ease-in',
//     EASE_OUT = 'ease-out',
// }
//
// interface IAnimationOptions {
//     delay: number;
//     type: AnimationTypeEnum;
// }
//
// function animate(_options: IAnimationOptions) {
//
// }
//
// animate({delay: 5000, type: AnimationTypeEnum.EASE_IN})


interface IFact {
    factId: number;
    userId: string;
    factValue: boolean
}

const dataList: { action: string, data: IFact }[] = [];

const uniqueValue = (): keyof IFact => { // 'factId' |'userId' | 'factValue'
    return 'factId'
}

dataList.map((item) => {
    if (item.data[uniqueValue()] === 2) {

    }
    return item;
})


let factId: IFact[ keyof IFact]  = ()=>{}
