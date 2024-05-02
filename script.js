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


/*---Video---*/


let video = document.querySelector('video');
let playButton = document.getElementById('play');
let pauseButton = document.getElementById('pause');
let timeDisplay = document.querySelector('.tiempo');

playButton.addEventListener('click', function() {
    video.play();
});

pauseButton.addEventListener('click', function() {
    video.pause();
});

video.addEventListener('timeupdate', function() {
    let timeRemaining = video.duration - video.currentTime;
    timeDisplay.textContent = "Tiempo Restante: " + formatTime(timeRemaining);
});

function formatTime(timeInSeconds) {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = Math.floor(timeInSeconds - minutes * 60);
    return minutes + ':' + pad(seconds);
}

function pad(number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}