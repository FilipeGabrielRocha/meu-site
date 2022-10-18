function calcIdade() {
    let anoAtual = new Date().getFullYear()
    let anoNasci = Number(2000)
    idade.innerHTML = Number(anoAtual) - Number(anoNasci)
}

function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}