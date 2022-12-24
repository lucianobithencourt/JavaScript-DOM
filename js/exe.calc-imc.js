

// manipulando elementos no html

function imc() {
    var element_nome = document.getElementById('inome').value;

    var element_peso = document.getElementById('ipeso').value;

    var element_altura = document.getElementById('ialtura').value;

    var $cal_imc = element_peso/(element_altura**2);
    
    // mostrando resultado no html
    res.innerHTML = (`O paciente ${element_nome} esta com imc ${$cal_imc.toFixed(2)}`);

    if ($cal_imc < 17.99) {
        txt.innerHTML = (`Peso preocupante -  ${element_peso}Kg - `)
        
    } else if ($cal_imc > 18 && $cal_imc < 20 ) {
        txt.innerHTML = (`Peso ideal -  ${element_peso}Kg - `);
        
    } else {

    }

}
