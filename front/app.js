console.log('Conetao jevi');
    // console.log(tareas);  


//  ESTE ES EL CODIGO PARA EL BUSCADOR **ARREGLAR CHILDREN, DARLE FORMATO, BUENA PRACTICA**
const losUl = document.querySelector('#task ul');
let losLi = document.querySelectorAll('#task ul li');
const Frm = document.forms['searchbar'].querySelector('input');

Frm.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const tareas = losUl.getElementsByTagName('li');

    Array.from(tareas).forEach(function(homework) {
        // const NameTask = homework.children[1].textContent;        ***Aqui es para aplica buena practica**
        const NameTask = homework.children[1].textContent;
        if(NameTask.toLowerCase().indexOf(term) != -1){

                homework.style.display = 'block';
            } else {
                homework.style.display = 'none';
            }

        });
});


// ESTE ES PARA EL BORRADO y TACHADO

losUl.addEventListener('click', function(e){
  if (e.target.className == 'imgTrash'){
    const li = e.target.parentElement;
    li.remove();

    // ESTE DEJA SABER QUE EL LI ESTA VACIO * MENSAJE DE QUE ESTA VACIO
    let losLi = document.querySelectorAll('#task ul li');

    if (losLi.length == 0){
      const li = document.createElement('li');
      const content = document.createElement('span');
    
      content.textContent = 'No hay Tareas Pendientes...';

      content.classList.add('detalles');

      content.style.visibility = "visible";
      content.style.display = "initial";
    
      losUl.appendChild(li);
      li.appendChild(content);
    } else {
      // console.log('Design by MiguelAC');
    }
    
  } 
  
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
  }
})


// VER VIDEO 11 Y 12 DE THE NET NINJA
// AGREGAR ESPACIO ENTRE LETRA Y CHECKBOX


// PARA AGREGAR TASK
  const ai = document.querySelector('.addinput');
  const ab = document.querySelector('.addbutton');
// console.log(ab);

ai.addEventListener('keyup', function(e){
  if (event.keyCode === 13) {
    ab.click();
  }
});

ab.addEventListener('click', function(e){
  // e.preventDefault();

  let aiv = ai.value;

  if (aiv.length < 1 || aiv == ' '){
    alert('Vacio? va segui...');
  } 
    else {
      const li = document.createElement('li');

      const square = document.createElement('input');
      square.type = 'checkbox';

      const content = document.createElement('span');

      const img = document.createElement('img');
      img.setAttribute("alt", "svgImg");
      img.setAttribute("class", "imgTrash");
      img.setAttribute("src", "./img/Trash.svg");

      // ADD CLASES
      square.classList.add('checkbox');
      content.classList.add('text');

      square.setAttribute("class", "checkbox");
      content.setAttribute("class", "text");


      content.textContent = ' '+aiv;
      //Stay at home

      // APPEND to DOM
        losUl.appendChild(li);
        li.appendChild(square);
        li.appendChild(content);
        li.appendChild(img);
  }


    // console.log('Design by MiguelAC');
    const details = document.querySelector('.detalles');
      details.parentElement.style.visibility = "hidden";
      details.parentElement.style.display = "none";
  

  // const details = document.querySelector('.detalles');
  //     details.parentElement.style.visibility = "hidden";
  //     details.parentElement.style.display = "none";

//  GET CLEAR
  document.getElementById("addinput").value = "";

});







// const ai = document.querySelector('.addinput').value;
// console.log(ai);

// ****************************************************************************************************
// AQUI ESTAN LOS CODIGOS UTILIZADOS ANTERIORMENTE [LOS MALA PRACTICAS]
// ****************************************************************************************************


// ESTE ES PARA EL TACHADO DE TASK, MEDIANTE EL SPAN .TEXT [BUSCA EL .TEXT Y LE APLICA EL TACHADO] ETE ES EL ORIGINAL

// const Tachar = document.querySelectorAll('.checkbox');
// Tachar.forEach(function(x){
// x.addEventListener('change', function(e){
// const li = e.target.parentElement;
// const spam = li.querySelector('.text');
//           if(x.checked){
//             spam.style.textDecorationLine = "line-through";
//           } else {
//              spam.style.textDecorationLine = "none";
//           }
//         });
// });


// ESTE ES EL ANTERIOR TACHADO DONDE SE APLICABA MEDIANTE EL PROXIMO ELEMENTO [ELEMENTSIBLING]

// const Tachar = document.querySelectorAll('.checkbox');
// console.log(Tachar);
// Array.from(Tachar).forEach(function(x){
// console.log(x);
// // console.log(x.nextElementSibling);
//     x.addEventListener('change', function(k){
//           if(x.checked){
//             x.nextElementSibling.style.textDecoration = "line-through";
//           } else {
//             x.nextElementSibling.style.textDecoration = "none";
//           }
//         });
// });


// ESTE ES PARA EL TACHADO DE TASK, MEDIANTE EL SPAN .TEXT [BUSCA EL .TEXT Y LE APLICA EL TACHADO]
// const Tachar = document.querySelectorAll('.checkbox');
// Tachar.forEach(function(x){
// console.log(x.nextElementSibling);
// x.addEventListener('change', function(e){
// const li = e.target.parentElement;
// const spam = li.querySelector('.text');
//           if(x.checked){
//             spam.style.textDecorationLine = "line-through";
//           } else {
//              spam.style.textDecorationLine = "none";
//           }
//         });
// });


// ESTE ES EL BORRADO BACKUP
// const imgTrash = document.querySelectorAll('img');
// // console.log(Imgs);
// imgTrash.forEach(function(trash){
// trash.addEventListener('click', function(e){
// const li = e.target.parentElement;
// li.remove();
//         });
// });


// dentro del agregar task

 // const li = document.createElement('li');

  // const square = document.createElement('input');
  // square.type = 'checkbox';

  // const content = document.createElement('span');

  // const img = document.createElement('img');
  // img.setAttribute("alt", "svgImg");
  // img.setAttribute("class", "imgTrash");
  // img.setAttribute("src", "./img/Trash.svg");

  //  // ADD CLASES
  //  square.classList.add('checkbox');
  //  content.classList.add('text');

  //  content.textContent = ai;

  //  // APPEND to DOM
  //   losUl.appendChild(li);
  //   li.appendChild(square);
  //   li.appendChild(content);
  //   li.appendChild(img);

  // GET CLEAR

  // console.log(ai);
  // ai.textContent('');