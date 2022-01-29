const nameDayC = document.getElementById('clock__nameDay');
const numDayC = document.getElementById('clock__numDay');
const monthC = document.getElementById('clock__month');
const yearC = document.getElementById('clock__year');
const hourC = document.getElementById('clock__hour');
const minuteC = document.getElementById('clock__minute');
const ampmC = document.getElementById('clock__ampm');
const secondC = document.getElementById('clock__second');

const week = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

var formatC = 24;
const millisecondsC = document.getElementById('clock__milliseconds');
const millisecondsB = document.getElementById('config__milliseconds');
const formatB = document.getElementById('config__format');

formatB.addEventListener('click', () => {
    let i = formatC;
    if(i==12){
        formatC = 24;
    }
    if(i==24){
        formatC = 12;
        ampmC.classList.toggle('clock__p--show')
    }
})

function update() {
    // Date
    let date = new Date();
    let nameDay = date.getDay();
    let numDay = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let ampm = '';
    let second = date.getSeconds();

    let milliseconds = date.getMilliseconds();
    millisecondsC.textContent = milliseconds;

    // Format of the hour
    if(formatC==12){
        if(hour >= 12){
            hour = hour - 12;
            ampm = 'pm'
        }else{
            ampm = 'am';
        }
    
        if(hour == 0){
            hour = 12;
        }
    }
    if(formatC==24){
        hour = hour;
    }

    if(minute < 10){
        minute = '0'+minute;
    }

    if(second < 10){
        second = '0'+second;
    }

    // Clock top
    nameDayC.textContent = week[nameDay];
    numDayC.textContent = numDay;
    monthC.textContent = months[month];
    yearC.textContent = year;

    // Clock bottom
    hourC.textContent = hour;
    minuteC.textContent = minute;
    ampmC.textContent = ampm;
    secondC.textContent = second;
}

millisecondsB.addEventListener('click', () => {
    millisecondsC.classList.toggle('clock__p--show');
});

setInterval(update, 10);