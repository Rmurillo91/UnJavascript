// primera prueba

var persona1 = S$("Raul","Murillo","es");

persona1.cambiarLengua("en").log();

console.log(persona1.saludito());

persona1.saludar();


$("#login").click( function() {
    $("#longdiv").hide();

    persona1.cambiarLengua($("#lang").val()).HTMLsal("#greeting").log();
});


