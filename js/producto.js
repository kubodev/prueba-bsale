window.onload = function todasLasFunciones() {
    validacionProducto();
    cargaProductoIndividual();
}

var producto = getParameterByName('producto');
var productoIndi = document.querySelector('#productoIndi')

function validacionProducto(){

    if(producto == '') {
        console.log('entroe y no hagao nada')
        window.location.href = "../index.html"
    }

}


/**
 * @param String name
 * @return String
 */
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


function cargaProductoIndividual() {
    
        fetch('https://kubodev.ml/'+ producto)
        .then(res => res.json())
        .then(data => {
            console.log('entro carga prodcutos '+ producto)
            llenadoProductosIndi(data)
        })
        .catch(err=>console.log(err))
    
}

function llenadoProductosIndi(datos) {
    
    productoIndi.innerHTML = ''
    for(let valor of datos) {
        if(valor.discount == 0) {
            valor.discount = 'No hay descuento'
        }else {
            valor.discount = `${valor.discount}% Descuento`
        }
        productoIndi.innerHTML += `
        <div class="card">
          <div class="row no-gutters">
            <aside class="col-md-6">
              <article class="gallery-wrap">
                <div class="img-big-wrap">
                  <a href="#"><img src="${valor.url_image}"></a>
                </div> 
              </article> 
            </aside>
            <main class="col-md-6 border-left">
              <article class="content-body">
  
                <h2 class="title">${valor.name}</h2>
  
                <div class="rating-wrap my-3">
                  <ul class="rating-stars">
                    <li style="width:80%" class="stars-active">
                      <img src="bootstrap-ecommerce-html/images/icons/stars-active.svg" alt="">
                    </li>
                    <li>
                      <img src="bootstrap-ecommerce-html/images/icons/starts-disable.svg" alt="">
                    </li>
                  </ul>
                  <small class="label-rating text-muted">132 vistas</small>
                  <small class="label-rating text-success"> <i class="fa fa-clipboard-check"></i> 154 pedidos </small>
                </div> <!-- rating-wrap.// -->
  
                <div class="mb-3">
                  <var class="price h4">$${valor.price}</var>
                  <span class="text-muted">${valor.discount}</span>
                </div>
  
  
                <dl class="row">
                  <dt class="col-sm-3">Categoria</dt>
                  <dd class="col-sm-9">${valor.categoriaNom}</dd>

                </dl>
  
                <hr>
                <div class="row">
                  <div class="form-group col-md flex-grow-0">
                    <label>Cantidad</label>
                    <div class="input-group mb-3 input-spinner">
                      <div class="input-group-prepend">
                        <button class="btn btn-light" type="button" id="button-plus"> + </button>
                      </div>
                      <input type="text" class="form-control" value="1">
                      <div class="input-group-append">
                        <button class="btn btn-light" type="button" id="button-minus"> − </button>
                      </div>
                    </div>
                  </div> <!-- col.// -->
                  <div class="form-group col-md">
                    
                  </div> <!-- col.// -->
                </div> <!-- row.// -->
                <a href="#" class="btn  btn-primary"> Compra </a>
                <a href="#" class="btn  btn-outline-primary"> <span class="text">Agrega al carro</span> <i
                    class="fas fa-shopping-cart"></i> </a>
              </article> <!-- product-info-aside .// -->
            </main> <!-- col.// -->
          </div> <!-- row.// -->
        </div> <!-- card.// -->
        
        `
    }



}