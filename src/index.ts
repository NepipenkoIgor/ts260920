import { CheckTypeInRuntime, Debounce, LogInputEvent, LogToSentry, SavePersistence } from "./decorators";
import { Range, Validate } from './utils';

class Search {

    @CheckTypeInRuntime
    @SavePersistence
    public initialValue!: string;

    public constructor(
        private readonly input: HTMLInputElement
    ) {
        this.input.addEventListener('input', this.onSearch.bind(this))
        console.log('send to server ===>', this.initialValue)
    }

    @Debounce(300)
    @LogInputEvent
    @LogToSentry
    private onSearch(_e: Event): void {
        this.initialValue = (_e.target as HTMLInputElement).value;
    }
}

const inputEl = document.querySelector('input') as HTMLInputElement;

const searchWidget = new Search(inputEl);

setTimeout(() => {
    (searchWidget.initialValue as any) = 1;
}, 7000)


class Calculator {
    @Validate
    public updatePercentage(
        _oldValue: number,
        @Range(30, 70) _newValue: number
    ) {
    }
}

const calc = new Calculator();
calc.updatePercentage(0, 40);

setTimeout(() => {
    calc.updatePercentage(40, 80);
}, 7000)
