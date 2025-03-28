let clickable = document.getElementById('container');

clickable.addEventListener('click', (event) => {
    (new Audio('beep-07a.mp3')).play();
})