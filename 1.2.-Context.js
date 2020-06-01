'use strict';
function init()
{
	const canvas = document.getElementById("webgl-canvas");

	//Aseguro de tener un canvas
	if(!canvas)
	{
		console.error('Error, el canvas no fue encontrado');
		return;
	}

	const gl = canvas.getContext('webgl2');

	//Aseguro de tener un contexto
	const mensaje = gl ? 'Tenemos un contexto' : 'Webgl no esta disponible';

	alert(mensaje);

	//Llamada a init una vez que el documento fue cargado
	window.onload = init;
}
