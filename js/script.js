window.onload = function todasLasFunciones() {
    oferta();
    todos();
}

var ofertas = document.querySelector('#ofertas')
var productos = document.querySelector('#productos')
var titulo = document.querySelector('#titulo')
var busqueda = document.querySelector('#busqueda')


function oferta() {
    fetch('https://kubodev.ml/oferta/1')
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
        if(valor.discount == 0) {
            valor.discount = 'No hay descuento'
        }else {
            valor.discount = `${valor.discount}% Descuento`
        }

        ofertas.innerHTML += `
            <div class="col-md-3">
                <div href="producto/producto.html?producto=${valor.id}" class="card card-product-grid">
                    <a href="producto/producto.html?producto=${valor.id}" class="img-wrap"> <img src="${valor.url_image}"> </a>
                    <figcaption class="info-wrap">
                        <a href="producto/producto.html?producto=${valor.id}" class="title">${valor.name}</a>
                        <div class="price mt-1">Cat: ${valor.categoriaNom}</div> 
                        <div class="price mt-1">${valor.discount}</div> 
                        <div class="price mt-1">$${valor.price}</div> 
                    </figcaption>
                </div>
            </div>
        `
    }
}

function todos() {
    fetch('https://kubodev.ml/')
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
        if(valor.discount == 0) {
            valor.discount = 'No hay descuento'
        }else {
            valor.discount = `${valor.discount}% Descuento`
        }
        productos.innerHTML += `
            <div class="col-md-3">
                <div href="producto/producto.html?producto=${valor.id}" class="card card-product-grid">
                    <a href="producto/producto.html?producto=${valor.id}" class="img-wrap"> <img src="${valor.url_image}"> </a>
                    <figcaption class="info-wrap">
                        <a href="producto/producto.html?producto=${valor.id}" class="title">${valor.name}</a>
                        <div class="price mt-1">Cat: ${valor.categoriaNom}</div> 
                        <div class="price mt-1">${valor.discount}</div> 
                        <div class="price mt-1">$${valor.price}</div> 
                    </figcaption>
                </div>
            </div>
        `
    }
}

function categorias(numero) {


    document.getElementById('main_nav').classList.remove('show');
    limpiarVista();
    fetch('https://kubodev.ml/categoria/'+ numero)
    .then(res => res.json())
    .then(data => {
        console.log('categoriajiae')
        console.log(data[0].name)
        llenadoCategorias(data)
    })
    .catch(err=>console.log(err))
}

function llenadoCategorias(datos) {
    
    productos.innerHTML = ''
    for(let valor of datos) {
        if(valor.discount == 0) {
            valor.discount = 'No hay descuento'
        }else {
            valor.discount = `${valor.discount}% Descuento`
        }
        productos.innerHTML += `
            <div class="col-md-3">
                <div href="producto/producto.html?producto=${valor.id}" class="card card-product-grid">
                    <a href="producto/producto.html?producto=${valor.id}" class="img-wrap"> <img src="${valor.url_image}"> </a>
                    <figcaption class="info-wrap">
                        <a href="producto/producto.html?producto=${valor.id}" class="title">${valor.name}</a>
                        <div class="price mt-1">Cat: ${valor.categoriaNom}</div> 
                        <div class="price mt-1">${valor.discount}</div> 
                        <div class="price mt-1">$${valor.price}</div> 
                    </figcaption>
                </div>
            </div>
        `
    }
}

function busquedaPro() {
    console.log('entro a busqueda primera');
    var valor = document.getElementById("busquedax").value;
    
    document.getElementById('busquedaid').classList.remove('d-none');
    limpiarVista();
    
    fetch('https://kubodev.ml/producto/'+valor)
    .then(res => res.json())
    .then(data => {
        console.log(data.err)
        if(data.err) {
            busqueda.innerHTML = '<p class="title">Nos hay Resultados</p>'
        } else {
            llenadoBusqueda(data)
        }
    })
    .catch(err=>console.log(err))
  }

function llenadoBusqueda(datos) {
    console.log('entro a busqueda');
    busqueda.innerHTML = ''
    for(let valor of datos) {
        if(valor.discount == 0) {
            valor.discount = 'No hay descuento'
        }else {
            valor.discount = `${valor.discount}% Descuento`
        }
        busqueda.innerHTML += `
            <div class="col-md-3">
                <div href="producto/producto.html?producto=${valor.id}" class="card card-product-grid">
                    <a href="producto/producto.html?producto=${valor.id}" class="img-wrap"> <img src="${valor.url_image}"> </a>
                    <figcaption class="info-wrap">
                        <a href="producto/producto.html?producto=${valor.id}" class="title">${valor.name}</a>
                        <div class="price mt-1">Cat: ${valor.categoriaNom}</div> 
                        <div class="price mt-1">${valor.discount}% Descuento</div> 
                        <div class="price mt-1">$${valor.price}</div> 
                    </figcaption>
                </div>
            </div>
        `
    }
}

function limpiarVista() {
    document.getElementById('banner').classList.add('d-none');
    document.getElementById('infoheader').classList.add('d-none');
}

function vistaPrevia() {
    document.getElementById('busquedaid').classList.add('d-none');
    document.getElementById('banner').classList.remove('d-none');
    document.getElementById('infoheader').classList.remove('d-none');
}

function menuMobile() {
    document.getElementById('main_nav').classList.add('show');
}


