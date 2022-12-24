
// consumo Combustivel

function calcularConsumo() {
   
var vlr_combustivel = document.getElementById('icombustivel').value;


var vlr_pago = document.getElementById('ipago').value


var vlr_consumo = document.getElementById('iconsumo').value;


var qtd_litros = (vlr_pago/vlr_combustivel);


var total_quilometros =(qtd_litros*vlr_consumo);
   
total.innerHTML = (`${qtd_litros.toFixed(2)}  lt`);

andar.innerHTML = (`${total_quilometros.toFixed(2)} Km`)


}











// ---------------------------------------------

// // calcularRaio()

// function calcularRaio() {
// //    a = ( pi*r*r)

//  var element_raio = document.getElementById('iraio').value

//   var area = (Math.PI*(element_raio**2));

//   raio.innerHTML = (`${area.toFixed(2)}cm<sup>2</sup>`);

// //   alert(`O valor da area do Circulo e ${area.toFixed(2)}`)

  

// }