/* CODIGO POR: IRALDO ARMANDO GONZALEZ CARVALLO
   ESTUDIANTE DE GRADO SUPERIOR - IES FRANCESC DE BORJAMOLL */
function enviarFormLang() {
    document.forms["formLang"].submit();
}

function cambiarIdioma(idioma){
    $("#idioma_actual").val(idioma);
}

function agradecerMensaje(){
    alert("Gracias por enviarnos tu mensaje, lo tendremos en consideración.");
}

$(document).ready(function(){
    $("#cont").addClass("reload");
});