import templates from '../templates/template-menu.hbs';
import menu from '../menu.json';

const insertMarkup = templates(menu);
// console.log(insertMarkup);

const menuItems = document.querySelector('.menu');
menuItems.insertAdjacentHTML('beforeend', insertMarkup);
