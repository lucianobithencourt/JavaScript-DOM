// eventos no mouse addEventListener  [ mouseenter - mousemove - mousedown - mouseup - click - mouseout ]

var element = document.getElementById('area')
element.addEventListener('click',clicar)
element.addEventListener('mouseenter',entrar)
element.addEventListener('mouseout',sair)


function clicar() {
    
    element.innerText = 'clicou';
    element.style.background='blue'
}

function entrar() {

    element.innerText = 'entrou';
    element.style.background='orange'
}

function sair() {
    element.innerText='saiu'
    element.style.background='purple'

}