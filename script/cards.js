const cards = document.querySelectorAll('.movie-card');

// 1. Lógica para ABRIR (Clique no Card)
cards.forEach(card => {
    card.addEventListener('click', (e) => {
        // O SEGREDO: Impede que o clique no card chegue até o documento
        // Se não tiver isso, o código de fechar lá embaixo roda imediatamente
        e.stopPropagation();

        // Se o card já estiver aberto (ativo), apenas fecha ele e para por aqui
        if (card.classList.contains('ativo')) {
            card.classList.remove('ativo');
            return;
        }

        // Se não estiver aberto:
        // Fecha qualquer outro card que esteja aberto antes de abrir este
        cards.forEach(c => c.classList.remove('ativo'));

        // Pega a imagem e joga no fundo da sinopse
        const img = card.querySelector('img').src;
        const sinopse = card.querySelector('.sinopse');
        sinopse.style.backgroundImage = `url('${img}')`;

        // Abre o card clicado
        card.classList.add('ativo');
    });
});

// 2. Lógica para FECHAR (Clique em qualquer lugar da tela)
document.addEventListener('click', () => {
    // Procura se tem algum card aberto
    const cardAtivo = document.querySelector('.movie-card.ativo');
    
    // Se tiver, remove a classe 'ativo' (fecha)
    if (cardAtivo) {
        cardAtivo.classList.remove('ativo');
    }
});