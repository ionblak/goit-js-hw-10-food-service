import itemsTemplate from '../templates/gallery-menu.hbs';
import menu from '../menu.json';

const markup = itemsTemplate(menu);

const listMenuRef = document.querySelector('.js-menu');

listMenuRef.insertAdjacentHTML('beforeend', markup);
