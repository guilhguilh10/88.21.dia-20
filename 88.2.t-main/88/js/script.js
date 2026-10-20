// Função para alternar entre as telas da loja dinamicamente
function mudarTela(idTela) {
    // 1. Esconde todas as secções que possuem a classe 'tela'
    const telas = document.querySelectorAll('.tela');
    telas.forEach(tela => {
        tela.style.display = 'none';
    });

    // 2. Mostra apenas a tela correspondente ao ID selecionado
    const telaAlvo = document.getElementById(idTela);
    if (telaAlvo) {
        telaAlvo.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola suavemente para o topo da página
    }
}


document.addEventListener('DOMContentLoaded', () => {
    mudarTela('menu-principal');
});