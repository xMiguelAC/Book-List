console.log("%cConexion Establecida!!", "color: green");

// VARIABLES GLOBALES QUE SE UTILIZAN EN DIFERENTES FUNCIONES
	const losUl = document.querySelector('#task ul');
	let losLi = document.querySelectorAll('#task ul li');
	const frm = document.forms['searchbar'].querySelector('input');
    var img = document.getElementsByClassName('imgTrash');
    // const urlOfApi = "http://localhost:3000/api/v1/books/";

    var valueImg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjYiIGhlaWdodD0iMjYiCnZpZXdCb3g9IjAgMCAyMjYgMjI2IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuNDg2LDIuNDg2KSBzY2FsZSgwLjk3OCwwLjk3OCkiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im5vbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgZmlsbD0iIzQyNWU1NiIgc3Ryb2tlPSIjNmM5YjhkIiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xMzAuMzg0NjIsLTAuMjcxNjNjNy4yNjYyMywwIDE0LjM5NjYzLDEuNDI2MDkgMTkuNTU3NjksNi41MTkyM2M1LjE2MTA2LDUuMDkzMTUgNi43OTA4NywxMi4zMjU0MiA2Ljc5MDg3LDE5LjgyOTMzaDM0LjQ5NzZjNC43ODc1NiwwIDguNjkyMzEsMy45MDQ3NSA4LjY5MjMxLDguNjkyMzFoOC42OTIzMXYxNy4zODQ2MmgtMTkxLjIzMDc3di0xNy4zODQ2Mmg4LjY5MjMxYzAsLTQuNzg3NTYgMy45MDQ3NSwtOC42OTIzMSA4LjY5MjMxLC04LjY5MjMxaDM0LjQ5NzZjMCwtNy41MDM5IDEuNjI5ODEsLTE0LjczNjE3IDYuNzkwODcsLTE5LjgyOTMzYzUuMTYxMDYsLTUuMDkzMTQgMTIuMjkxNDcsLTYuNTE5MjMgMTkuNTU3NjksLTYuNTE5MjN6TTg4LjgyNDUyLDE5LjI4NjA2Yy0wLjU0MzI3LDAuNTA5MzIgLTEuNjI5ODEsMS45MzUzOSAtMS42Mjk4MSw2Ljc5MDg3aDUxLjYxMDU4YzAsLTQuODU1NDcgLTEuMDg2NTQsLTYuMjgxNTUgLTEuNjI5ODEsLTYuNzkwODdjLTAuNTQzMjcsLTAuNTA5MzIgLTIuMDM3MjYsLTEuNjI5ODEgLTYuNzkwODcsLTEuNjI5ODFoLTM0Ljc2OTIzYy00Ljc1MzYxLDAgLTYuMjQ3NiwxLjEyMDQ5IC02Ljc5MDg3LDEuNjI5ODF6TTE5MS4yMzA3Nyw2MC44NDYxNXYxMzkuMDc2OTJjMCwxNC4zNjI2OCAtMTEuNzE0MjQsMjYuMDc2OTIgLTI2LjA3NjkyLDI2LjA3NjkyaC0xMDQuMzA3NjljLTE0LjM2MjY4LDAgLTI2LjA3NjkyLC0xMS43MTQyNCAtMjYuMDc2OTIsLTI2LjA3Njkydi0xMzkuMDc2OTJ6TTY5LjUzODQ2LDE5MS4yMzA3N2gxNy4zODQ2MnYtMTA0LjMwNzY5aC0xNy4zODQ2MnpNMTA0LjMwNzY5LDE5MS4yMzA3N2gxNy4zODQ2MnYtMTA0LjMwNzY5aC0xNy4zODQ2MnpNMTM5LjA3NjkyLDE5MS4yMzA3N2gxNy4zODQ2MnYtMTA0LjMwNzY5aC0xNy4zODQ2MnoiPjwvcGF0aD48L2c+PHBhdGggZD0iTTAsMjI2di0yMjZoMjI2djIyNnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIj48L3BhdGg+PGcgZmlsbD0iIzQyNWU1NiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiPjxwYXRoIGQ9Ik05NS42MTUzOCwtMC4yNzE2M2MtNy4yNjYyMiwwIC0xNC4zOTY2MywxLjQyNjA5IC0xOS41NTc2OSw2LjUxOTIzYy01LjE2MTA2LDUuMDkzMTUgLTYuNzkwODcsMTIuMzI1NDIgLTYuNzkwODcsMTkuODI5MzNoLTM0LjQ5NzZjLTQuNzg3NTYsMCAtOC42OTIzMSwzLjkwNDc1IC04LjY5MjMxLDguNjkyMzFoLTguNjkyMzF2MTcuMzg0NjJoMTkxLjIzMDc3di0xNy4zODQ2MmgtOC42OTIzMWMwLC00Ljc4NzU2IC0zLjkwNDc1LC04LjY5MjMxIC04LjY5MjMxLC04LjY5MjMxaC0zNC40OTc2YzAsLTcuNTAzOSAtMS42Mjk4MSwtMTQuNzM2MTcgLTYuNzkwODcsLTE5LjgyOTMzYy01LjE2MTA2LC01LjA5MzE0IC0xMi4yOTE0NiwtNi41MTkyMyAtMTkuNTU3NjksLTYuNTE5MjN6TTk1LjYxNTM4LDE3LjY1NjI1aDM0Ljc2OTIzYzQuNzUzNjEsMCA2LjI0NzYsMS4xMjA0OSA2Ljc5MDg3LDEuNjI5ODFjMC41NDMyNywwLjUwOTMyIDEuNjI5ODEsMS45MzUzOSAxLjYyOTgxLDYuNzkwODdoLTUxLjYxMDU4YzAsLTQuODU1NDcgMS4wODY1NCwtNi4yODE1NSAxLjYyOTgxLC02Ljc5MDg3YzAuNTQzMjcsLTAuNTA5MzIgMi4wMzcyNiwtMS42Mjk4MSA2Ljc5MDg3LC0xLjYyOTgxek0zNC43NjkyMyw2MC44NDYxNXYxMzkuMDc2OTJjMCwxNC4zNjI2OCAxMS43MTQyNCwyNi4wNzY5MiAyNi4wNzY5MiwyNi4wNzY5MmgxMDQuMzA3NjljMTQuMzYyNjgsMCAyNi4wNzY5MiwtMTEuNzE0MjQgMjYuMDc2OTIsLTI2LjA3Njkydi0xMzkuMDc2OTJ6TTY5LjUzODQ2LDg2LjkyMzA4aDE3LjM4NDYydjEwNC4zMDc2OWgtMTcuMzg0NjJ6TTEwNC4zMDc2OSw4Ni45MjMwOGgxNy4zODQ2MnYxMDQuMzA3NjloLTE3LjM4NDYyek0xMzkuMDc2OTIsODYuOTIzMDhoMTcuMzg0NjJ2MTA0LjMwNzY5aC0xNy4zODQ2MnoiPjwvcGF0aD48L2c+PHBhdGggZD0iIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciI+PC9wYXRoPjwvZz48L2c+PC9zdmc+";
    	

// AQUI AGREGAMOS LA IMAGEN TAN LARGA A CADA UNO SIN NECESIDAD DE REPETIRLO.
    Array.from(img).forEach(function(imgs){

    	imgs.src = valueImg;
    })



// ESTA ES LA FUNCION PARA OBTENER EL LISTADO DE LIBROS
function GetList() {

	var request = new XMLHttpRequest()
	var getUrl = 'http://localhost:3000/api/v1/books/';

	request.open('GET', getUrl, true)

	request.onload = function () {

			const listado = JSON.parse(this.response)
			var listValue = listado.data

			listValue.forEach((book) => {

				// CREANDO LOS ELEMENTOS
			  	  const li = document.createElement('li');
			      const square = document.createElement('input');
			      square.type = 'checkbox';
			      const content = document.createElement('span');
			      const dni = document.createElement('span');

			      // CREANDO LA IMAGEN CON SUS ATRIBUTOS
			      const img = document.createElement('img');
			      img.setAttribute("alt", "Basurita");
			      img.setAttribute("class", "imgTrash");
			      img.setAttribute("src", valueImg);

			      // AGREGANDO CLASES
			      square.classList.add('checkbox');
			      content.classList.add('text');
			      li.classList.add('li');

			      // POR SI ACASO DA ERROR EL OTRO:
			      square.setAttribute("class", "checkbox");
			      content.setAttribute("class", "text");
			      dni.setAttribute("class", "dni");
			      li.setAttribute("class", "li");

			      // AGREGANDO EL CONTENIDO DE CADA UNO
			      dni.textContent = ' '+book.id;
			      content.textContent = ' '+book.title;

			      // AÑADIENDO AL DOM
			        losUl.appendChild(li);
			        li.appendChild(square);
			        li.appendChild(dni);
			        li.appendChild(content);
			        li.appendChild(img);
			})
		}

		request.send()
	};


// AQUI SE MUESTRA EL CODIGO DONDE HACEMOS EL GET PARA MOSTRAR LOS DATOS DE LA API
document.addEventListener('DOMContentLoaded', function(e){
	GetList();
	console.warn('Recuerda: Quedate en casa...');
})

//  ESTE ES EL CODIGO PARA EL BUSCADOR 
frm.addEventListener('keyup', function(e){

    const term = e.target.value.toLowerCase();

    // console.log(term); manda lo que se introdujo

    const tareas = losUl.getElementsByClassName('li');
    // console.log(tareas); manda un htmlcollection de los li

    Array.from(tareas).forEach(function(homework) {
    // console.log(homework); AGARRA los li con su estilo

    var hw = Array.from(homework);
    var ta = Array.from(tareas);
    // Array.from(hw);
    console.log(tareas);
    console.log(ta);

	const contentValue = homework.querySelector('.text').textContent;
    // console.log(contentValue); les saca su contenido

    // si homework 

	        if(contentValue.toLowerCase().indexOf(term) != -1){
	                homework.style.display = 'block';

	            } else {
	                homework.style.display = 'none';

	            }
        });
});


// ESTE ES EL APARTADO PARA EL BORRADO y TACHADO DE LIBROS

// FUNCION PARA BORRAR LIBROS
losUl.addEventListener('click', function(e){
  if (e.target.className == 'imgTrash'){

    const li = e.target.parentElement;
    const searchID = li.querySelector('.dni');
    const idToDelete = searchID.textContent;

    	var request = new XMLHttpRequest();

		var deleteUrl = "http://localhost:3000/api/v1/books/";

		var deleteUrlCompleted = deleteUrl+idToDelete;

		request.open("DELETE", deleteUrlCompleted, true);

		request.send();

    li.remove();

// ********************************************************************************
    // ESTE DEJA SABER QUE EL LI ESTA VACIO * MENSAJE DE QUE ESTA VACIO
// ********************************************************************************

	let losLi = document.querySelectorAll('#task ul li');

	    if (losLi.length == 0){
	      const li = document.createElement('li');
	      const content = document.createElement('span');
	    
	      content.textContent = 'No hay Libros...';

	      content.classList.add('detalles');

	      content.style.visibility = "visible";
	      content.style.display = "initial";
	    
	      losUl.appendChild(li);
	      li.appendChild(content);

	    }    
  } 

  // FUNCION PARA TACHAR LIBROS

  else if (e.target.className == 'checkbox'){
	const Tachar = document.querySelectorAll('.checkbox');

    Tachar.forEach(function(x){

	      x.addEventListener('change', function(e){

		      const li = e.target.parentElement;
		      const spam = li.querySelector('.text');

		          if(x.checked){
		            spam.style.textDecorationLine = "line-through";
		          } else {
		             spam.style.textDecorationLine = "none";
		          }
			});
		});
	};

})


// PARA AGREGAR UN LIBRO A LA BASE DE DATOS

function Reload(){
	location.reload();
}

// VARIABLES PARA AGREGAR O MODIFICAR
  const ai = document.querySelector('.addinput');
  const ab = document.querySelector('.addbutton');
  const di = document.getElementById('idInput');

// DETALLES PARA INTRODUCIR DATOS CON 'Enter' 
ai.addEventListener('keyup', function(e){
  if (event.keyCode === 13) {
    ab.click();
  }
});

// EVENTO DEL BOTON AGREGAR 
ab.addEventListener('click', function(e){

  let aiv = ai.value;
  let div = di.value;

// VERIFICACION DE SI ESTA VACIO 
  if (aiv.length < 1 || aiv == ' '){
    alert('Lo siento, no puede agregar algo vacio...');

  } else {

		// VERIFICACION DE SI TIENE ID O NO 
    	 if (div == '') {

			var request = new XMLHttpRequest();

			var postUrl = "http://localhost:3000/api/v1/books/";

			// request.open("POST", postUrl, true);
			request.open("POST", "http://localhost:3000/api/v1/books/", true);

			request.setRequestHeader("Content-Type", "application/json");

			let aiv_json = { title: ai.value, body: "test" };

			var myJson = JSON.stringify(aiv_json);

			request.send(myJson);

    	 } // SI TIENE ID PASA CUMPLE CON LA FUNCION DE MODIFICAR
    	 	else {

    	 		var idToPut = div;

				var request = new XMLHttpRequest();

				var putUrl = "http://localhost:3000/api/v1/books/";

				var putUrlCompleted = putUrl+idToPut;

				request.open("PUT", putUrlCompleted, true);

				request.setRequestHeader("Content-Type", "application/json");

				let aiv_Json = { title: ai.value, body: "test" };

				var myJson = JSON.stringify(aiv_Json);

				request.send(myJson);
    	 }
  	}
		

// INPUT CLEAR
  document.getElementById("addinput").value = "";

// SECCION PARA AGREGAR EL NUEVO LIBRO AL LISTADO
  setTimeout(Reload, 3500);

});

// FUNCION QUE AGREGA BOTON DE CANCELAR LA MODIFICACION
function cancelModify(){

	const cancelButton = document.getElementById('modifybutton');

	cancelButton.style.visibility = "visible";
	cancelButton.style.display = "initial";

	        cancelButton.addEventListener('click', function(e){
	        	document.getElementById("idInput").value = '';
  				document.getElementById("addinput").value = '';
  				document.getElementById("addbutton").value = 'Add';
	        })
};

// EDITAR [put] EL LI SELECCIONADO DESDE EL ADD-INPUT
losUl.addEventListener('click', function(e){
	const selectedLi = e.target;

	if (selectedLi.className == 'li'){

		const d = selectedLi.querySelector('.dni');
		const t = selectedLi.querySelector('.text');

		const dniValue = d.textContent;
		const textValue = t.textContent;

  		document.getElementById("idInput").value = dniValue;
  		document.getElementById("addinput").value = textValue;
		ab.setAttribute("value", "Modify");
		cancelModify();

	} else if (selectedLi.className == 'text'){

		var spanParent = selectedLi.parentElement;

		const d = spanParent.querySelector('.dni');
		const t = spanParent.querySelector('.text');

		const dniValue = d.textContent;
		const textValue = t.textContent;

  		document.getElementById("idInput").value = dniValue;
  		document.getElementById("addinput").value = textValue;
		ab.setAttribute("value", "Modify");
		cancelModify();
	}

});



console.log("%cDesign by %cMiguelAC.", "color: #00acdb", "color: green");