const modeL = document.getElementById('mode__link');

const clockT = document.getElementById('clock__top');
const clockB = document.getElementById('clock__bottom');
const config = document.getElementById('config');
const mode = document.getElementById('mode__container');
const modeC = document.getElementById('mode__circle');

modeL.addEventListener('click', () => {
    modeC.classList.toggle('mode__circle--clear');
    clockT.classList.toggle('clock__top--clear');
    clockB.classList.toggle('clock__bottom--clear');
    config.classList.toggle('config--clear');
    mode.classList.toggle('mode__container--clear');
})