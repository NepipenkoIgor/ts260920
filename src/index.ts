// // function average(a: number, b: number, c: number): string {
// //     const avg: number = (a + b + c) / 3
// //     return `Average is ${avg}`;
// // }
// //
// // average(1);
// // average(1, '2', 3);
// // const num: number = average(1, 2, 3);
//
//
// // function average(a: number, b?: number, c?: number): string {
// //     if (b === undefined) {
// //         b = 0;
// //     }
// //     if (c === undefined) {
// //         c = 0;
// //     }
// //     const avg: number = (a + b + c) / 3
// //     return `Average is ${avg}`;
// // }
// //
// // average(1);
// // average(1, 2);
// // average(1, '2', 3);
// // const num: number = average(1, 2, 3);
//
// // function average(a: number, b = 0, c = 0): string {
// //     const avg: number = (a + b + c) / 3
// //     return `Average is ${avg}`;
// // }
// //
// // average(1);
// // average(1, 2);
// // average(1, '2', 3);
// // const num: number = average(1, 2, 3);
//
// // function average(...args: [number, string, number]): string {
// //     let total: number = 0;
// //     for (const item of args) {
// //         total += item;
// //     }
// //     const avg: number = total / args.length;
// //     return `Average is ${avg}`;
// // }
// type sn = string | number;
//
// // function isString(item: sn): item is string {
// //     return typeof item === 'string'
// // }
// //
// // function average(...args: sn[]): string {
// //     let total: number = 0;
// //     for (const item of args) {
// //         if (isString(item)) {
// //             total += Number(item);
// //             continue;
// //         }
// //         total += item;
// //     }
// //     const avg: number = total / args.length;
// //     return `Average is ${avg}`;
// // }
// //
// // average(1);
// // average(1, 2);
// // average(1, 2, 4, 4);
// // average(1, 2, 4, 4, 5, 6);
// // average(1, '2', 3);
// // const num: number = average(1, 2, 3);
//
//
// function isString(item: sn): item is string {
//     return typeof item === 'string'
// }
//
//
// function average(a: string, b: number): string;
// function average(a: number, b: string): string;
// function average(a: number, b: number, c: number): string;
// function average(...args: sn[]): string {
//     let total: number = 0;
//     for (const item of args) {
//         if (isString(item)) {
//             total += Number(item);
//             continue;
//         }
//         total += item;
//     }
//     const avg: number = total / args.length;
//     return `Average is ${avg}`;
// }
//
// average('1', 1);
// average(1, '1');
// average(1, 2, 3);
// average(1, 2, 4, 4);
// average(1, 2, 4, 4, 5, 6);
// average(1, '2', 3);
// const num: number = average(1, 2, 3);
//
// // function getFullName(this: {name: string, surname: string}) {
// //     return `${this.name} ${this.surname}`
// // }
// //
// // let account = {
// //     name: 'Ihor',
// //    // surname: 'Nepipenko',
// //     getFullName
// // }
// //
// // account.getFullName()
//
// //
// // interface  A {
// //     reduce(): number;
// //     reduce(a: string): string;
// // }
