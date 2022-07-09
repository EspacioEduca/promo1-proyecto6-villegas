let fotos =[
    "./recursos/arepa.jfif",
    "./recursos/bollitos.jfif",
    "./recursos/cachapa.jfif",
    "./recursos/empanada.jfif",
    "./recursos/hallacas.jfif",
    "./recursos/hamburguesa.jfif",
    "./recursos/pabellon.jfif",
    "./recursos/paella.jfif",
    "./recursos/perro.jfif",
    "./recursos/pizza.jfif",
    "./recursos/platano.jfif",
];

for (imagen of fotos){
    $(".gallery").append("<img src="+imagen+">")
}

$(".add").click(function(){
    let imagen=$(".picture-url").val()
    $(".gallery").append("<img src="+imagen+">")
    fotos.push(imagen)
    $(".contador").text("")
    $(".contador").append("<h1>cantidad de imagenes : "+fotos.length+"</h1")
    $(".picture-url").val("")
});

 