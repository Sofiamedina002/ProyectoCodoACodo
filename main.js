document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.getElementById("formulario")
    formulario.addEventListener("submit", validarFormulario); 
  });

var validarFormulario = function(e){
    validarNombre(e);
    validarEmail(e);
    validarAsunto(e);
    validarMensaje(e);
}

function validarNombre(e){
    if (document.getElementById("nombre").value == 0){
        alert("Completa el campo nombre");
        e.preventDefault();
    }
}

function validarEmail(e){
    if (document.getElementById("usuario").value == 0){
        alert("Completa el campo email");
        //swal("ERROR", "Completa el campo email", "error");
        e.preventDefault();
    }
}

function validarAsunto(e){
    if (document.getElementById("asunto").value == 0){
        alert("Completa el campo asunto");
        e.preventDefault();
    }
}

function validarMensaje(e){
    if (document.getElementById("msg").value == 0){
        alert("Completa el campo mensaje");
        e.preventDefault();
    }
}


  
//   function validarFormulario(evento) {
//     evento.preventDefault();
//     var nombre = document.getElementById("nombre").value;
//     if(nombre.length == 0) {
//         //alert("Se esperaba un nombre");
//         //return;
//         nombre.setCustomValidity("Se esperaba un nombre");
//     }
//     var email = document.getElementById("usuario").value;
//     if (email.validity.typeMismatch) {
//         email.setCustomValidity("Se esperaba una dirección de correo electrónico");
//     } else {
//         email.setCustomValidity("");
//     };
//     var asunto = document.getElementById("asunto").value;
//     if(asunto.length == 0) {
//         //alert("Se esperaba un asunto");
//         //return; 
//         asunto.setCustomValidity("Se esperaba un asunto");
//     }
//     var mensaje = document.getElementById("msg").value;
//     if(mensaje.length == 0) {
//         //alert("Se esperaba un mensaje");
//         //return;
//         mensaje.setCustomValidity("Se esperaba un mensaje");
//     }
//     this.submit();
//   }