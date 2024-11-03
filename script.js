let hour = document.getElementById('horas');
let minutes = document.getElementById('minutos');
let seconds = document.getElementById('segundos');

const watch = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    hour.textContent = hr;
    minutes.textContent= min;
    seconds.textContent= s;

})
