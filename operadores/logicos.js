let temDinheiro = true;
let estaChovendo = false;
let carroEstaNaGaragem = false;

let resultadoAND = "#AND Você vai ao shopping?";
resultadoAND += temDinheiro && estaChovendo;
console.log(resultadoAND);

let resultadoOR = "#OR Você vai no shooping?";
resultadoOR += temDinheiro || carroEstaNaGaragem;
console.log(resultadoOR);