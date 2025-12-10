/* Código gerado com auxilio de IA */



// Seleciona todos os elementos com a classe 'movie-card'
const cards = document.querySelectorAll('.movie-card');

// --- LÓGICA PARA ABRIR O CARD ---
// Adiciona um evento de clique a cada um dos cards de filme/série.
cards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Impede que o clique se propague para outros elementos,
        // evitando que o evento de fechar seja acionado acidentalmente.
        e.stopPropagation();

        // Se o card clicado já estiver aberto (com a classe 'ativo'),
        // ele é fechado e a função para por aqui.
        if (card.classList.contains('ativo')) {
            card.classList.remove('ativo');
            return;
        }

        // Antes de abrir um novo card, fecha qualquer outro que esteja aberto.
        // Isso garante que apenas um card fique aberto por vez.
        cards.forEach(c => c.classList.remove('ativo'));

        // Define a imagem do card como fundo da sinopse para um efeito visual.
        const img = card.querySelector('img').src;
        const sinopse = card.querySelector('.sinopse');
        sinopse.style.backgroundImage = `url('${img}')`;

        // Adiciona a classe 'ativo' para expandir e mostrar os detalhes do card.
        card.classList.add('ativo');
    });
});

// --- LÓGICA PARA FECHAR O CARD ---
// Adiciona um evento de clique no documento inteiro.
// Isso permite fechar o card ao clicar em qualquer lugar fora dele.
document.addEventListener('click', () => {
    // Procura por um card que esteja atualmente aberto (com a classe 'ativo').
    const cardAtivo = document.querySelector('.movie-card.ativo');
    
    // Se um card aberto for encontrado, a classe 'ativo' é removida para fechá-lo.
    if (cardAtivo) {
        cardAtivo.classList.remove('ativo');
    }
});