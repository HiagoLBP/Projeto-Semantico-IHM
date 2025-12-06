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


/* --- CARROSSEL DE TEXTO (HERO SECTION) --- */

const heroTitle = document.getElementById('heroTitle');
const heroSubtitle = document.getElementById('heroSubtitle');
const heroContent = document.querySelector('.hero-content');

// Lista de frases para trocar
const textos = [
    {
        titulo: "ENCONTRE SUA PRÓXIMA OBSESSÃO",
        subtitulo: "MILHARES DE NOVAS HISTÓRIAS E UNIVERSOS ESPERANDO POR VOCÊ"
    },
    {
        titulo: "HISTÓRIAS QUE MOVEM VOCÊ",
        subtitulo: "PREPARE-SE PARA RIR, CHORAR E SE SURPREENDER A CADA PLAY"
    },
    {
        titulo: "SÉRIES EXCLUSIVAS E ORIGINAIS",
        subtitulo: "MARATONE AS TEMPORADAS COMPLETAS AGORA MESMO"
    },
    {
        titulo: "SEU CINEMA, EM QUALQUER LUGAR",
        subtitulo: "ASSISTA NO CELULAR, TABLET OU SMART TV. SEM LIMITES"
    }

];

let indexAtual = 0;

function trocarTexto() {
    // 1. Adiciona a classe que faz o texto sumir (fade-out)
    heroContent.classList.add('fade-out');

    // 2. Espera 0.5s (tempo da animação CSS) para trocar o texto real
    setTimeout(() => {
        // Passa para a próxima frase
        indexAtual++;
        
        // Se chegou no fim da lista, volta para o zero
        if (indexAtual >= textos.length) {
            indexAtual = 0;
        }

        // Troca o texto no HTML 
        heroTitle.innerText = textos[indexAtual].titulo;
        heroSubtitle.innerText = textos[indexAtual].subtitulo;

        // 3. Remove a classe para o texto aparecer de novo (fade-in)
        heroContent.classList.remove('fade-out');
        
    }, 500); // 500ms = 0.5 segundos (mesmo tempo do CSS)
}

// Inicia a troca automática a cada 4 segundos (4000ms)
setInterval(trocarTexto, 4000);