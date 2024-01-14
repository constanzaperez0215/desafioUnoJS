// Captura de valores

const precio = document.querySelector(".precio-inicial").innerHTML;
let cantidad = document.querySelector(".cantidad")
let total = document.querySelector(".valor-total")

// Captura de btn + y -

let btnMas = document.querySelector(".btnMas")
let btnMenos = document.querySelector(".btnMenos")



// click boton Mas

btnMas.addEventListener("click", function() {

    let nCantidad = Number(cantidad.innerHTML);
    let acumulador = nCantidad + 1;

    // Inyectar acumulador
    cantidad.innerHTML = acumulador

    // Inyectar el valor total
    total.innerHTML= acumulador * precio
} )



//  click boton menos

btnMenos.addEventListener("click", function (){

    let nCantidad = Number(cantidad.innerHTML)
    let desacumulador = nCantidad - 1

    // Inyectar desacumulador
    cantidad.innerHTML = desacumulador

    // inyectar valor total
    total.innerHTML = desacumulador * precio
})