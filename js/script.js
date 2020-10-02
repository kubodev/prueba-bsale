window.onload = function todasLasFunciones() {
    oferta();
    todos();
    busqueda();
}


var ofertas = document.querySelector('#ofertas')
var productos = document.querySelector('#productos')
var titulo = document.querySelector('#titulo')
var busqueda = document.querySelector('#busqueda')

function oferta() {
    fetch('http://kubodev.ml:3000/oferta/1')
    .then(res => res.json())
    .then(data => {
        console.log(data[0].name)
        llenadoOfertas(data)
    })
    .catch(err=>console.log(err))
}

function llenadoOfertas(datos) {
    ofertas.innerHTML = ''
    for(let valor of datos) {
        ofertas.innerHTML += `
            <div class="col-md-3">
                <div href="#" class="card card-product-grid">
                    <a href="#" class="img-wrap"> <img src="${valor.url_image}"> </a>
                    <figcaption class="info-wrap">
                        <a href="#" class="title">${valor.name}</a>
                        <div class="price mt-1">${valor.discount}% Descuento</div> 
                        <div class="price mt-1">$${valor.price}</div> 
                    </figcaption>
                </div>
            </div>
        `
    }
}

function todos() {
    fetch('http://kubodev.ml:3000/')
    .then(res => res.json())
    .then(data => {
        console.log(data[0].name)
        llenadoProductos(data)
    })
    .catch(err=>console.log(err))
}

function nombreCategoria(nombre) {
    console.log('nombrecategoria'+nombre)
    if(nombre == 0) {
        titulo.innerHTML = `
        <h3 class="section-title">Productos en oferta</h3>
        `
    } else {
        `
        <h3 class="section-title">${nombre}</h3>
        `
    }

}

function llenadoProductos(datos) {
    nombreCategoria(0);
    productos.innerHTML = ''
    for(let valor of datos) {
        productos.innerHTML += `
            <div class="col-md-3">
                <div href="#" class="card card-product-grid">
                    <a href="#" class="img-wrap"> <img src="${valor.url_image}"> </a>
                    <figcaption class="info-wrap">
                        <a href="#" class="title">${valor.name}</a>
                        <div class="price mt-1">${valor.discount}% Descuento</div> 
                        <div class="price mt-1">$${valor.price}</div> 
                    </figcaption>
                </div>
            </div>
        `
    }
}

function categorias(numero) {
    fetch('http://kubodev.ml:3000/categoria/'+numero)
    .then(res => res.json())
    .then(data => {
        console.log(data[0].name)
        llenadoCategorias(data)
    })
    .catch(err=>console.log(err))
}

function llenadoCategorias(datos) {
    productos.innerHTML = ''
    for(let valor of datos) {
        productos.innerHTML += `
            <div class="col-md-3">
                <div href="#" class="card card-product-grid">
                    <a href="#" class="img-wrap"> <img src="${valor.url_image}"> </a>
                    <figcaption class="info-wrap">
                        <a href="#" class="title">${valor.name}</a>
                        <div class="price mt-1">${valor.discount}% Descuento</div> 
                        <div class="price mt-1">$${valor.price}</div> 
                    </figcaption>
                </div>
            </div>
        `
    }
}

function busqueda() {
    console.log('entro a busqueda primera');
    var valor = ocument.getElementById("busquedax").value;
    document.getElementById('busquedaid').classList.remove('d-none');
    fetch('http://kubodev.ml:3000/producto/'+valor)
    .then(res => res.json())
    .then(data => {
        console.log(data[0].name)
        llenadoBusqueda(data)
    })
    .catch(err=>console.log(err))
}

function llenadoBusqueda(datos) {
    console.log('entro a busqueda');
    busqueda.innerHTML = ''
    for(let valor of datos) {
        busqueda.innerHTML += `
            <div class="col-md-3">
                <div href="#" class="card card-product-grid">
                    <a href="#" class="img-wrap"> <img src="${valor.url_image}"> </a>
                    <figcaption class="info-wrap">
                        <a href="#" class="title">${valor.name}</a>
                        <div class="price mt-1">${valor.discount}% Descuento</div> 
                        <div class="price mt-1">$${valor.price}</div> 
                    </figcaption>
                </div>
            </div>
        `
    }
}

