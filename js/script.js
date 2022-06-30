/*Seleccionar Contenido------------------------------------------------------------------*/

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


/*Eventos ---------------------------------------------------------------------------------------*/

// console.log('1');

// window.addEventListener('load', function() { //load espera que carague todos el JS, HTML y CSS y todos los archivos que dependen de estos
// 	console.log('2');
// });

// window.onload = function() { // Igual a la linea 48, distinta sintaxis
// 	console.log('3');
// }

// document.addEventListener('DOMContentLoaded', function() {// Solo espera que se descargue el HTML, pero no espera CSS e Imagenes
// 	console.log('5')
// });

// console.log('4');


// window.onscroll = function() {
// 	console.log('scrolling...')
// }


/*Seleccionar elementos y asociarles un evento--------------------------------------------------------------*/
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
// 	console.log(evento)
// 	evento.preventDefault()

// 	//Validar un formulario
// 	console.log('Enviando formulario...')
// });


//Eventos de los Input y Textarea----------------

const datos = {
	nombre: '',
	email: '',
	mensaje: ''
}

const nombreImput = document.querySelector('#nombre');
const emailImput = document.querySelector('#email');
const mensajeImput = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

// nombre.addEventListener('input', function(e) { //change no evalua en tiempo real, input si.
// 	console.log(e.target.value);
// });
// email.addEventListener('input', function(e) {
// 	console.log(e.target.value);
// });
// mensaje.addEventListener('input', function(e) {
// 	console.log(e.target.value);
// }); /* Mucho Codigo Repetido */

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);


/*Evento de Submit--------------*/
formulario. addEventListener('submit', function(evento){
	evento.preventDefault();

	//Validar el formulario

	const {nombre, email, mensaje} = datos;

	if (nombre == '' || email == '' || mensaje == ''){
		
		mostrarError('Todos los campos son obligatorios')

		return //Corta la ejecucuin si se cumple la condicion.
	}

	//Enviar el formulario

	envioCorrecto('Todos los datos fueron enviados correctamente')
});

function leerTexto(e){
	//console.log(e.target.value);
	datos[e.target.id] = e.target.value;

	//console.log(datos); //Muestra los datos que pasan por e (evento)
}

//Mostrar error de envio de formulario en pantalla
function mostrarError(mensaje){
	const error = document.createElement('P');
	error.textContent = mensaje;
	error.classList.add('error');


	formulario.appendChild(error); 

	//Desaparezca despues de 5 segundos
	setTimeout(() =>{
		error.remove();
	},5000);
}

//Mostrar envio de formulario correcto
function envioCorrecto(mensaje){
	const enviado = document.createElement('P');
	enviado.textContent = mensaje;
	enviado.classList.add('enviado');

	formulario.appendChild(enviado);

	//Desaparezca despues de 5 segundos
	setTimeout(() =>{
		enviado.remove();
	},5000);
}





