var populares = document.querySelector('#populares')


window.onload = function traerPopulares() {
    fetch('https://50.19.163.37:3000/oferta/1')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    }
        

    )
}
