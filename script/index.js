/* Código gerado com auxilio de IA */



// --- LÓGICA DO CARROSSEL DE FILMES/SÉRIES ---
// Seleciona todos os carrosséis da página.
const carousels = document.querySelectorAll('.carousel-wrapper');

// Para cada carrossel encontrado, configura os botões de rolagem.
carousels.forEach(wrapper => {
    
    const container = wrapper.querySelector('.movie-grid'); // O contêiner que rola
    const btnLeft = wrapper.querySelector('.btn-left');     // Botão de rolar para a esquerda
    const btnRight = wrapper.querySelector('.btn-right');   // Botão de rolar para a direita
    const scrollAmount = 300; // Quantidade de pixels para rolar a cada clique

    // Garante que todos os elementos necessários (contêiner e botões) existem
    if (container && btnRight && btnLeft) { 
        
        // Adiciona o evento de clique para o botão direito,
        // que rola o contêiner para a direita de forma suave.
        btnRight.addEventListener('click', () => {
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        // Adiciona o evento de clique para o botão esquerdo,
        // que rola o contêiner para a esquerda de forma suave.
        btnLeft.addEventListener('click', () => {
            container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
    }
});


// --- LÓGICA DO CARROSSEL DE TEXTO (SEÇÃO HERO) ---
const heroTitle = document.getElementById('heroTitle');
const heroSubtitle = document.getElementById('heroSubtitle');
const heroContent = document.querySelector('.hero-content');

// Lista de objetos, onde cada um contém um título e um subtítulo para o carrossel.
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

let indexAtual = 0; // Controla qual frase está sendo exibida

// Função que realiza a troca de texto com efeito de fade
function trocarTexto() {
    // Adiciona uma classe para aplicar o efeito de fade-out (desaparecer)
    heroContent.classList.add('fade-out');

    // Aguarda a animação de fade-out terminar (0.5s) antes de trocar o texto
    setTimeout(() => {
        // Avança para o próximo conjunto de textos
        indexAtual++;
        
        // Se chegar ao final da lista, volta para o início
        if (indexAtual >= textos.length) {
            indexAtual = 0;
        }

        // Atualiza o título e o subtítulo no HTML
        heroTitle.innerText = textos[indexAtual].titulo;
        heroSubtitle.innerText = textos[indexAtual].subtitulo;

        // Remove a classe de fade-out para que o novo texto apareça (fade-in)
        heroContent.classList.remove('fade-out');
        
    }, 500); // O tempo (500ms) deve ser o mesmo da transição no CSS
}

// Inicia a função 'trocarTexto' repetidamente a cada 4 segundos
setInterval(trocarTexto, 4000);