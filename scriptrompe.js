/*---Rompecabezas---*/


let imagenes = document.querySelectorAll('.contenedorImagen img');
let soluciones = document.querySelectorAll('.solucion');

imagenes.forEach(function(imagen) {
    imagen.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text', this.id);
    });
});

soluciones.forEach(function(solucion) {
    solucion.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    solucion.addEventListener('drop', function(event) {
        event.preventDefault();
        let id = event.dataTransfer.getData('text');
        let imagen = document.getElementById(id);

        if (this.getElementsByTagName('img').length === 0) {
            this.innerHTML = '';
            this.appendChild(imagen);  
        }
    });
});

document.getElementById('reiniciar').addEventListener('click', function() {
    window.location.reload();
    });