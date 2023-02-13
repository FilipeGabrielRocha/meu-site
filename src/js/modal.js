const botaoModal = document.querySelector('.fechar-modal')

const listaMeusJogos = document.querySelectorAll('.jogo')
console.log(listaMeusJogos);

const divModal = document.querySelector('.modal')

listaMeusJogos.forEach(item => {
    item.addEventListener('click', () => {
        divModal.classList.add('aberto')
    })
});

botaoModal.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('aberto')
})