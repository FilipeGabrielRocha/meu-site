function calcIdade() {
    let anoAtual = new Date().getFullYear()
    let mesAtual = new Date().getMonth()
    let diaAtual = new Date().getDay()
    let anoNasci = Number(2000)

    if (diaAtual === 14 && mesAtual === 11) {
        idade.innerHTML = Number(anoAtual) - Number(anoNasci)
    } else{
        idade.innerHTML = (Number(anoAtual) - Number(anoNasci) - 1)
    }
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