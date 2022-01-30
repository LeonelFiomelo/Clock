const body = document.body
const modeL = document.getElementById('mode__link');
const mode = document.getElementById('mode__container');

modeL.addEventListener('click', () => {
    body.classList.toggle('dark');
    mode.classList.toggle('active');
})