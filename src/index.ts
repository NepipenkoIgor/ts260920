import './polyfill';
import speakRealSloth1 from "./module-1";
import speakRealSloth2 from "./module-2";
import speakRealSloth3 from "./module-3";
import speakRealSloth4 from "./module-4";
import speakRealSloth5 from "./module-5";

speakRealSloth1(['Hi', 'all', 'TS', 'is', 'Awesome !!!'])
speakRealSloth2(['Hi', 'all', 'TS', 'is', 'Awesome !!!'])
speakRealSloth3(['Hi', 'all', 'TS', 'is', 'Awesome !!!'])
speakRealSloth4(['Hi', 'all', 'TS', 'is', 'Awesome !!!'])
speakRealSloth5(['Hi', 'all', 'TS', 'is', 'Awesome !!!'])

// function someAction() {
//     setTimeout(() => {
//         throw new Error('My Error')
//     }, 2000)
// }
//
// someAction();

const enum Size {
    S = 42,
    M = 44,
    XL = 52
}

const size: Size = Size.M;
console.log(size);
// enum UserActions {
//     CREATE = 'CREATE USER',
//     REMOVE = 'REMOVE USER',
//     DELETE = REMOVE
// }
//
// enum Tooltip {
//     TOP = 'TOP',
//     BOTTOM = 'BOTTOM'
// }

