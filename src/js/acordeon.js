const perguntasERespostas = document.querySelectorAll('.item')

perguntasERespostas.forEach(item => {
    item.addEventListener('click', () => {
        const perguntaAtiva = document.querySelector('.ativo')
        if(perguntaAtiva) {
            perguntaAtiva.classList.remove('ativo')
        }

        item.classList.add('ativo')
    })
});