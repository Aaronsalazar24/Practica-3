function cambiarColor(){
    let colores = [
        "lightpink",
        "lightblue",
        "lightyellow",
        "lightpurple"

    ];
    let aleatorio = Math.floor(Math.random() * colores.length);
    document.body.style.backgroundColor = colores [aleatorio];
}