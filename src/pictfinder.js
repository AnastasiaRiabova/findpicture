// import pictures from './templates/pictureform.hbs';
// const apiKey = '17932475-fa3bff9a21e600e77ff47095a';
// const input = document.querySelector('#search-form > input');
// const button = document.querySelector('.button');
// const list = document.querySelector('.gallery');
// require('lodash');

import { noConflict } from 'handlebars';

// input.addEventListener(
//   'input',
//   _.debounce(() => {
//     newMarkup();
//   }, 500),
// );

// let page = 1;

// function searchImg() {
//   if (input.value.length !== 0) {
//     return fetch(
//       `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${input.value}&page=${page}&per_page=12&key=${apiKey}`,
//     ).then(res => res.json());
//   } else {
//     list.innerHTML = '';
//   }
// }
// button.addEventListener('click', showeMore);

// function newMarkup() {
//   searchImg().then(pict => {
//     const markup = pictures(pict.hits);
//     list.insertAdjacentHTML('beforeend', markup);
//   });
// }

// function showeMore() {
//   page += 1;
//   newMarkup();
// }
// __________________________________________________
// function capital(a) {
//   const letters = a.split('-');
//   console.log(letters);
//   const allLetters = letters.map(
//     el => el.charAt(0).toUpperCase() + el.slice(1),
//   );

//   console.log(allLetters.join(''));
// }
// capital('item-list-value');
// capital('-webkit-transition');
// ___________________________________________________
// function digital_root(n) {
//   const num = n.toString();
//   const num2 = num.split('');
//   let sum = 0;
//   if (num.length === 2) {
//     const num2 = parseInt(num[0]) + parseInt(num[1]);
//     console.log(num2);
//     return num2;
//   }
//   num2.map(string => {
//     sum = sum + Number(string);
//   });
//   if (sum > 10) {
//     digital_root(sum);
//   } else {
//     console.log(sum);
//     return sum;
//   }
// }

// digital_root(1599);
// digital_root(14);
// ________________________________________________

// function digital_rot(n) {
//   const num = n.toString();
//   const num2 = num.split('');
//   let sum = 0;
//   num2.map(string => {
//     sum = sum + Number(string);
//   });
//   if (sum > 10) {
//     digital_root(sum);
//   } else {
//     console.log(sum);
//     return sum;
//   }
// }

// digital_rot(456);
// digital_rot(10);
// ---------------------------------------------
// function dig(n) {
//   const num = n.toString();
//   if (num.length === 2) {
//     const num2 = parseInt(num[0]) + parseInt(num[1]);
//     console.log(num2);
//     return num2;
//   } else if (num.length > 2) {
//   }
// }

// dig(20);
// -------------------------------------------
