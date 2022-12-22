// DOM - Domain Object Model


// ACESSO AO ELEMENTO  POR MARCA (tag name)
// getElementsByTagName()[];

var element = document.getElementsByTagName('h2')[1];
element.style.color='red';
element.innerHTML='**Acessando elemento**';
element.style.fontFamily='TimesNewRoma'
// ----------------------------------------------------
var element1 = document.getElementsByTagName('h2')[0];
element1.style.color='purple';
element1.innerHTML='--Acessando elemento--';
element1.style.fontFamily='TimesNewRoma'
// ----------------------------------------------------

// ACESSO AO ELEMENTO  POR ID (id="")
// getElementsByTagName()[];

var element2 = document.getElementById('resul');
element2.style.color='green';
element2.innerText='Novo resultado com getElementById()'
element2.style.fontWeight='bold';
// ----------------------------------------------------

var element3 =document.getElementById('clique');
element3.innerHTML='-q-w-e-r-t-y-'

// ----------------------------------------------------

// ACESSO AO ELEMENTO  POR ID (class)

var element4=document.getElementsByClassName('acesso')[0];
element4.innerText='-------------------------------'
element4.style.background='red'

// ----------------------------------------------------

// ACESSO AO ELEMENTO  POR ID (class)
// document.querySelector('div.nome-da-div')


let element5 = document.querySelector('div.query')

element5.innerHTML='77777'

