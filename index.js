// Clases


class Producto{
    constructor(id, nombre, imagen, precioUnitario){
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precioUnitario = precioUnitario;
    }
};

class Carrito{
    constructor(id, productos) {
        this.id = id;
        this.productos = [];
    }

    calcularTotal() {
        let total = 0;
        for(let i = 0; i < this.productos.length ; i++) {
            total = total + this.productos[i].precioUnitario;
        }
        return total;
    }
}


// Funciones

function renderCard(producto){
    let cardRendered = `
    <div class="card m-3" style="width: 18rem;">
        <img src="./images/${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.id}.${producto.nombre}</h5>
            <p class="card-text">${producto.precioUnitario}</p>
        <a href="#" class="btn btn-primary botonDeCompra" id="${producto.id}">Agregar al Carrito</a>
        </div>
    </div>`;
    return cardRendered;
}

function limpiarCarrito() {
    let divCarrito = document.querySelector("#carrito");
    divCarrito.innerHTML = "";
}

function actualizarCarrito(carrito) {
    let divCarrito = document.querySelector("#carrito");
    carrito.productos.forEach(producto => {
        divCarrito.innerHTML += renderCard(producto);
    })
    divCarrito.innerHTML += `<h1>Precio Total: $ ${carrito.calcularTotal()}</h1>`
}

function renovarStorage() {
    localStorage.removeItem("carrito");
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Cargar carrito existente

window.addEventListener(`DOMContentLoaded`, (event) => {
    let storage = JSON.parse(localStorage.getItem("carrito"));
    let carritoGuardado = new Carrito(storage.id, storage.productos);
    storage.productos.forEach(producto => {
        carritoGuardado.productos.push(producto);
    })
    console.log(carritoGuardado);
    limpiarCarrito();
    actualizarCarrito(carritoGuardado);
});


// Catalogo de productos

let catalogoProductos = []
let producto1 = new Producto(1, "Esponja", "esponja.jpg", 200);
let producto2 = new Producto(2, "Jabon", "jabon.jpg", 400);
let producto3 = new Producto(3, "Shampoo", "shampoo.jpg", 450);
let producto4 = new Producto(4, "Acondicionador", "acondicionador.jpg", 500);
let producto5 = new Producto(5, "Escoba", "escoba.jpg", 800);
let producto6 = new Producto(6, "Trapo", "trapo.jpg", 750);
let producto7 = new Producto(7, "Detergente", "detergente.jpg", 690);
let producto8 = new Producto(8, "Clorox", "clorox.jpg", 890);
let producto9 = new Producto(9, "Windex", "windex.jpg", 890);

catalogoProductos.push(producto1);
catalogoProductos.push(producto2);
catalogoProductos.push(producto3);
catalogoProductos.push(producto4);
catalogoProductos.push(producto5);
catalogoProductos.push(producto6);
catalogoProductos.push(producto7);
catalogoProductos.push(producto8);
catalogoProductos.push(producto9);


// Tarjetas de producto 

let cardsDiv = document.querySelector("#cards");

catalogoProductos.forEach(producto => {
    cardsDiv.innerHTML += renderCard(producto);
})


// Agregar productos al carrito de compras

let carrito = new Carrito(1);


// Botones

let botones = document.querySelectorAll(".botonDeCompra");
let arrayDeBotones = Array.from(botones);
arrayDeBotones.forEach (boton => {
    boton.addEventListener("click", (e) => {
        let productoSeleccionado = catalogoProductos.find(producto => producto.id == e.target.id);
        carrito.productos.push(productoSeleccionado);
        limpiarCarrito();
        actualizarCarrito (carrito);
        renovarStorage();
    })
});



const DateTime = luxon.DateTime

const fecha = DateTime.local(2022, 7, 25, 10, 30);
console.log("Fecha: "+ fecha.toString())

const fechaDesdeObjeto1 = DateTime.fromObject(
    {day: 22, hour: 12, month: 2 }, 
    {zone: "America/Buenos_Aires"}
);


const fechaDesdeObjeto2 = DateTime.fromObject(
    {day: 22, hour: 10, month: 2 }, 
    {zone: "America/New_York"}
);

console.log("Fecha y hora con tz: "+ fechaDesdeObjeto1.toString());

console.log("Fecha y hora con tz: "+ fechaDesdeObjeto2.toString());


// Tiempo hasta que se vacie el carrito

const Duration = luxon.Duration
const dt = DateTime.now();
const dur = Duration.fromObject({hours: 3, minutes: 30});

console.log(dur.hours)
console.log(dur.minutes)

