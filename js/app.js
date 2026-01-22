// 1. A SUA LISTA REAL DE RESTAURANTES (BANCO DE DADOS MVP)
const restaurantes = [
    {
        nome: "Cantina da Nonna",
        bairro: "Mooca",
        preco: "R$",
        estrelas: "4.9",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=60",
        whatsapp: "5511999999999"
    },
    {
        nome: "Sampa Burger House",
        bairro: "Pinheiros",
        preco: "R$$",
        estrelas: "4.7",
        imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=60",
        whatsapp: "5511888888888"
    }
];

// 2. FUNÇÃO PARA DESENHAR OS CARDS NA TELA
function renderizarRestaurantes(lista) {
    const container = document.getElementById('listaRestaurantes');
    container.innerHTML = ""; // Limpa a lista antes de desenhar

    lista.forEach(res => {
        const cardHTML = `
            <div class="card">
                <div class="heart-tag">❤</div>
                <img src="${res.imagem}" alt="${res.nome}">
                <div class="card-info">
                    <h3>${res.nome}</h3>
                    <p class="meta">📍 ${res.bairro} • ${res.preco} • ⭐ ${res.estrelas}</p>
                    <a href="https://wa.me/${res.whatsapp}" class="btn-wpp" target="_blank">
                        WhatsApp <i class="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// 3. LÓGICA DE BUSCA E FILTRO
document.addEventListener('DOMContentLoaded', () => {
    // Desenha todos os restaurantes assim que o site abre
    renderizarRestaurantes(restaurantes);

    const btn = document.getElementById('btnBuscar');
    const input = document.getElementById('inputBusca');

    btn.addEventListener('click', () => {
        const termo = input.value.toLowerCase().trim();
        
        // Filtra a lista original baseado no que foi digitado
        const filtrados = restaurantes.filter(res => 
            res.nome.toLowerCase().includes(termo) || 
            res.bairro.toLowerCase().includes(termo)
        );

        renderizarRestaurantes(filtrados);
    });
});
