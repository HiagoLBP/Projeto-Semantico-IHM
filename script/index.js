// Código gerado com auxílio de IA 

const carousels = document.querySelectorAll('.carousel-wrapper');

carousels.forEach(wrapper => {
    
    const container = wrapper.querySelector('.movie-grid');
    const btnLeft = wrapper.querySelector('.btn-left');
    const btnRight = wrapper.querySelector('.btn-right');
    const scrollAmount = 300; 

    if (container && btnRight && btnLeft) { 
        
        // Botão Direito
        btnRight.addEventListener('click', () => {
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        // Botão Esquerdo
        btnLeft.addEventListener('click', () => {
            container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
    }
});