// Seleciona os elementos
const container = document.querySelector('.movie-grid');
const btnLeft = document.getElementById('leftBtn');
const btnRight = document.getElementById('rightBtn');

const scrollAmount = 300; 

btnRight.addEventListener('click', () => {
    container.scrollBy({
        left: scrollAmount, 
        behavior: 'smooth' 
    });
});

// Evento: Clicou na seta esquerda
btnLeft.addEventListener('click', () => {
    container.scrollBy({
        left: -scrollAmount, 
        behavior: 'smooth'
    });
});
