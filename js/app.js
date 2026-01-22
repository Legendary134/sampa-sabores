// Aguarda o site carregar
document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('btnBuscar');
    const campoTexto = document.getElementById('inputBusca');

    // Função que faz a mágica de esconder/mostrar
    function filtrar() {
        const termo = campoTexto.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.card'); // Pega todos os cards de restaurantes

        cards.forEach(card => {
            const conteudo = card.innerText.toLowerCase();
            // Se o texto do card tem o que você digitou, ele aparece. Se não, some.
            if (conteudo.includes(termo)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Escuta o clique no botão de buscar
    botao.addEventListener('click', filtrar);

    // Faz a busca funcionar também ao apertar a tecla "Enter"
    campoTexto.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') filtrar();
    });
});
