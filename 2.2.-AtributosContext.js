'use strict';

let gl;

function updateClearColor(...color) 
{
	gl.clearColor(...color);
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.viewport(0, 0, 0, 0);
}

function checkKey(event)
{
	switch( event.keyCode)
	{
		case 49: 
		{
			updateClearColor(0.2, 0.8, 0.2, 1.0);
			break;
		}

		case 50: 
		{
			updateClearColor(0.2, 0.2, 0.8, 1.0);
			break;
		}

		case 51:
		{
			updateClearColor(Math.random(), Math.random(), Math.random(), 1.0);
			break;
		}

		case 52:
		{
			const color = gl.getParameter(gl.COLOR_CLEAR_VALUE);
			alert(`clearColor = (
				${color[0].toFixed(1)},
				${color[1].toFixed(1)},
				${color[2].toFixed(1)}
				)`);

			window.focus();
			break;
		}
	}
}

function init()
{
	const canvas = document.getElementById("webgl-canvas");

	//Aseguro de tener un canvas
	if(!canvas)
	{
		console.error('Error, el canvas no fue encontrado');
		return;
	}

	gl = canvas.getContext('webgl2');

	//Aseguro de tener un contexto
	const mensaje = gl ? 'Tenemos un contexto' : 'Webgl no esta disponible';

	alert(mensaje);

	window.onkeydown = checkKey;
}

//Llamada a init una vez que el documento fue cargado
window.onload = init;
