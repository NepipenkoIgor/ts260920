import { generateMenu } from "./menu";
import { list } from "./menu/data";

//

// $('.menu')
//     .html()
//     .on()
let user: ICustomUser = {} as ICustomUser;
console.log(user)
$('.menu')
    .html(generateMenu(list))
    .on('click', (e: Event) => {
        const el: HTMLElement = e.target as HTMLElement;
        if (!el.classList.contains('title')) {
            return;
        }
        const parentLi: HTMLLIElement = el.parentElement as HTMLLIElement;
        parentLi.classList.toggle('menu-open');
    })

// const menuNav = document.querySelector('.menu') as HTMLDivElement;
// menuNav.innerHTML = generateMenu(list);
// menuNav.addEventListener('click', (e: MouseEvent) => {
//     const el: HTMLElement = e.target as HTMLElement;
//     if (!el.classList.contains('title')) {
//         return;
//     }
//     const parentLi: HTMLLIElement = el.parentElement as HTMLLIElement;
//     parentLi.classList.toggle('menu-open');
// })

