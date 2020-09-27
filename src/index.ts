// T extends U ? X : Y

// type noUndefined<T> = T extends string | number ? never : T;
// type snbu = string | boolean | number | undefined;
// let v: boolean | undefined = () => {
// }

// interface IUser {
//     name: string;
//     age: number;
// }
//
// const arr: [() => IUser, () => number | null] = [() => ({name: 'Ihor', age: 34}), () => 2]
//
// type FirstFnReturnType<T> =
//     T extends [unknown, infer L, ...any[]]
//         ? L extends (...args: any[]) => infer R ? R : never
//         : never
//
// const b: FirstFnReturnType<typeof arr> = true;


// function fn(_a: number, _b: string): boolean {
//     return true;
// }
//
// type NonFunction<T> = T extends Function ? never : T;
//
// type FunctionParamsAndReturn<T> = T extends (...args: infer Args) => infer R
//     ? NonFunction<Args[keyof Args]> | R
//     : never
//
// const c1: FunctionParamsAndReturn<typeof fn> = null;
//
// let a: Exclude<string | number, number> = 1
