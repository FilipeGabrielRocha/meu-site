function calcIdade() {
    let data = new Date();
    let anoAtual = data.getFullYear()
    let mesAtual = (data.getMonth() + 1)
    let diaAtual = data.getDate()
    let anoNasci = Number(2000)

    if (diaAtual === 14 && mesAtual === 11) {
        idade.innerHTML = Number(anoAtual) - Number(anoNasci)
    } else if (diaAtual > Number(14)) {
        idade.innerHTML = Number(anoAtual) - Number(anoNasci)
    } else {
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