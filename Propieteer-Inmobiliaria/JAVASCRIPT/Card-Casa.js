// Función boton 1
//
document.getElementById("mostrarFormulario").addEventListener("click", function() {
    var formulario = document.getElementById("FormContainer");
    formulario.style.display = "inline-block";
});

// Función boton 3

// Función boton Cerrar Formulario
//
document.getElementById("ocultarForm").addEventListener("click", function() {
    var formulario = document.getElementById("FormContainer");
    formulario.style.display = "none";
});


// Función boton "Mas Detalles Card-1"
//
document.getElementById("masDetallesC1").addEventListener("click", function() {
    var formulario = document.getElementById("cuadroDetallesC1");
    formulario.style.display = "inline-block";
});

// Función boton Cerrar cuadro Detalles
//
document.getElementById("ocultarCuadroC1").addEventListener("click", function() {
    var formulario = document.getElementById("cuadroDetallesC1");
    formulario.style.display = "none";
});

