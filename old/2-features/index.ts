/***/
let period: number = 60;
const baseUrl: string = 'http://localhost:4200'

/***/
let firstName = 'Ihor';

let account = {
    firstName,
    getName(): string {
        return this.firstName;
    }
}

/***/

let person = {...account};
let dates = [...[11, 12, 13]]

/***/
let {firstName: myName} = account
let [firstDate] = dates;

/***/
let sum = (a: number, b: number) => a + b;

/***/
for (const date of dates) {
    console.log(date);
}

/***/
class Point {
    public x: number = 1;
    public y: number = 2;

    public sum() {
        return this.x + this.y;
    }
}

/***/
function userMessage([start, end]: TemplateStringsArray, {firstName: name}: typeof person) {
    return `${start}${name}${end}`
}

console.log(userMessage`Good day ${person} !!!`)

/***/

let user: any = {};
let male = user?.info?.male()

/***/
let admin;
let p = admin ?? user;
