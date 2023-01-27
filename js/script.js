let usuario = prompt("Ingrese su nombre")
alert("¡Bienvenido/a " + usuario + " a Mundo Gaming!");

const productos = [
    { 
        nombre: "Gabinete",
        color: "Negro RGB",
        precio: 15000,
        garantía: "2 años"
    },
    {
        nombre: "CPU",
        color: "Negro",
        precio: 80000,
        garantía: "3 años"
    },
    {
        nombre: "Teclado mecánico",
        color: "Blanco RGB",
        precio: 10000,
        garantía: "6 meses"
    },
    {
        nombre: "Teclado de membrana",
        color: "Negro RGB",
        precio: 6000,
        garantía: "6 meses"
    },
    {
        nombre: "Teclado semi mecánico",
        color: "Rosa RGB",
        precio: 8000,
        garantía: "6 meses"
    },
    {
        nombre: "Mouse",
        color: "Azul RGB",
        precio: 5000,
        garantía: "1 año"
    },
    {
        nombre: "Micrófono",
        color: "Negro",
        precio: 8000,
        garantía: "1 año"
    },
    {
        nombre: "Monitor",
        color: "Negro",
        precio: 30000,
        garantía: "2 años"
    }
]
for (let i = 0; i < 8; i++) {
    console.log(productos[i]);
}
productos.forEach((producto) => {
    console.log(producto.nombre);
    console.log(producto.precio);
    console.log(producto.garantía);
})

let productoIngresado = prompt("¿Qué producto está buscando comprar?");
const teclados = productos.filter((producto) => producto.nombre.includes("Teclado"));
console.log(teclados);