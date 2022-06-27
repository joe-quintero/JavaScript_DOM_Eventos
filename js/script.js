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
enlaces[0].classList.add('nueva-clase'); //Agega una clase al enlace
enlaces[0].classList.remove('nueva-clase'); // Eliminamos clase del enlace

//getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);

/*Generar codigo HTML (Nuevo enlace)------------------------------------------------------*/

//Creamos la etiqueta
const nuevoEnlace = document.createElement('A');
//Agregar href
nuevoEnlace.href = ('nuevo-enlace.html');
//Agregar texto
nuevoEnlace.textContent = ('Un Nuevo Enlace');
//agregar calse
nuevoEnlace.classList.add('navegacion__enlace');

//Agregar al documento HTML
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

/*Resultado : <a href="nuevo-enlace.html" class="navegacion__enlace">Un Nuevo Enlace<a>*/


console.log(nuevoEnlace);
