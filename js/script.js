//Seleccionar Contenido

//QuerySelector //Retorna 0 o 1 elementos
const heading = document.querySelector('.header__texto h2')
heading.textContent = 'Nuevo Heading'; //Cambiamos el nombre
heading.classList.add('nueva-clase'); //Agregamos nueva clase a la etiqueta

console.log(heading);

//QuerySelectorAll //Retorna 0 hasta la cantidad de selectores que alla

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo Enlace'; //modificacmos en mombre del enlace
enlaces[0].href = 'http://www.google.com'; //modificamos la direccion del enlace


//getElementById