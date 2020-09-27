import 'reflect-metadata';

export function LogInputEvent(
    _target: object,
    _key: string,
    descriptor: PropertyDescriptor
): PropertyDescriptor {
    console.log(_target);
    const originalValue = descriptor.value;
    return {
        ...descriptor,
        value(e: Event) {
            const inputRef = e.target as HTMLInputElement;
            console.log(`Input value in method ${_key} equal to ${inputRef.value}`);
            originalValue.call(this, e);
        }
    }
}

export function LogToSentry(
    _target: object,
    _key: string,
    descriptor: PropertyDescriptor
): PropertyDescriptor {
    const originalValue = descriptor.value;
    return {
        ...descriptor,
        value(e: Event) {
            try {
                originalValue.call(this, e);
            } catch (err) {
                // sent by http
                console.log(err);
            }
        }
    }
}


export function Debounce(ms: number) {
    let timeId: number | null;
    return (
        _target: object,
        _key: string,
        descriptor: PropertyDescriptor
    ): PropertyDescriptor => {
        const originalValue = descriptor.value;
        return {
            ...descriptor,
            value(...args: unknown[]) {
                if (timeId) {
                    clearTimeout(timeId);
                }
                timeId = window.setTimeout(() => {
                    originalValue.call(this, ...args);
                }, ms)
            }
        }
    }
}


export function SavePersistence(target: any, key: string) {
    const localKey = `${target.constructor.name}_${key}`;

    const getter = () => {
        return localStorage.getItem(localKey);
    }

    const setter = (newValue: string) => {
        localStorage.setItem(localKey, newValue);
    }


    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    })
}


export function CheckTypeInRuntime(target: any, key: string) {

    const {name: type} = Reflect.getMetadata('design:type', target, key)
    let value: any;

    Object.defineProperty(target, key, {
        get() {
            return value;
        },
        set(newValue: any) {
            const realType = typeof newValue;
            const actualType = type.toLowerCase();
            if (realType !== actualType) {
                throw new Error(`type of ${key} is not ${actualType}. You tried to assign ${realType}`)
            }
            value = newValue;
        },
        enumerable: true,
        configurable: true
    })
}
