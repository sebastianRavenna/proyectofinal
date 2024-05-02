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
