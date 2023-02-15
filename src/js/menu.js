const botaoHamburguer = document.querySelector('.botaoHamburguer')

botaoHamburguer.addEventListener('click', () => {
    const menu = document.querySelectorAll('.linkMenu')
    menu.forEach((item) => {
        item.addEventListener('click', () => {
            botaoHamburguer.click()
        })
    });
})