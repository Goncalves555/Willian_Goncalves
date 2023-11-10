function mudarCorBotaoWhatsapp() {
    var botaoWhatsapp = document.getElementById('botaoWhatsapp');

    //variável para rastrear o estado atual da cor
    var corAtual = 'verde'; // Começa com verde

    botaoWhatsapp.addEventListener('click', function() {
        // Alternar entre verde e vermelho
        if (corAtual === 'verde') {
            botaoWhatsapp.style.backgroundColor = '#ff0000'; // Vermelho
            corAtual = 'vermelho';
        } else {
            botaoWhatsapp.style.backgroundColor = '#00e238'; // Verde
            corAtual = 'verde';
        }

        // Adicionar e remover classes para aplicar estilos CSS
        if (botaoWhatsapp.classList.contains('verde')) {
            botaoWhatsapp.classList.remove('verde');
            botaoWhatsapp.classList.add('vermelho');
        } else {
            botaoWhatsapp.classList.remove('vermelho');
            botaoWhatsapp.classList.add('verde');
        }
    });
}

document.addEventListener('DOMContentLoaded', mudarCorBotaoWhatsapp);
