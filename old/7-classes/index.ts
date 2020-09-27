type Constructable = new (...args: any[]) => any;

function Timestamped<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public timestamped = new Date()
    }
}

function Tagged<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public tags = ['ts', 'angular']
    }
}

interface IBasePoint {
    readonly x: number
}

class BasePoint implements IBasePoint {
    #z: number;

    prop: IBasePoint = {} as IBasePoint;

    public constructor(
        public readonly x: number,
        protected readonly y: number,
        z: number,
    ) {
        this.#z = z;
    }

    public onInit(): this {
        // this.x = 1;
        // this.y = 1;
        return this;
    }

    public sum(): number {
        return this.x + this.y + this.#z;
    }
}

// tslint:disable-next-line:max-classes-per-file
class Point extends Timestamped(Tagged(BasePoint)) {
    public sum(): number {
        return super.sum();
    }
}

const p1 = new Point(1, 2, 1);

// tslint:disable-next-line:max-classes-per-file
class Singleton {
    private static instance: Singleton;

    private constructor() {
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

}

const inst1 = Singleton.getInstance();
const inst2 = Singleton.getInstance();
const inst3 = Singleton.getInstance();
const inst4 = Singleton.getInstance();

console.log(inst2 === inst4);
console.log(p1.timestamped);
console.log(p1.tags);


abstract class AbstractControl<T> {
    public abstract model: T;

    public abstract getValue(): T;

    public onFocus() {
        // some actions
    }

    public onBlur() {
        // some actions
    }
}

abstract class FullAbstract<T> extends AbstractControl<T> {
    public abstract setValue(): T;
}


class MHDropDown extends FullAbstract<{ name: string, lable: string }[]> {
    public model = [];

    public getValue(): { name: string; lable: string }[] {
        return [];
    }
}

