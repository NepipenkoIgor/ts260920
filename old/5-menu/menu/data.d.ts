export interface IList {
    readonly title: string;
    readonly items?: IList[];
}
export declare const list: IList[];
