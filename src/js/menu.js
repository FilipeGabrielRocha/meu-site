const botaoHamburguer = document.getElementById('menu-hamburguer')

botaoHamburguer.addEventListener('click', () => {
    const navegacao = document.getElementById('nav')
    if (navegacao.classList.contains('desativado')) {
        navegacao.classList.remove('desativado')
    } else {
        navegacao.classList.add('desativado')
    }
})