function processoPedido(valor, quantidade, operacao){
    return operacao(valor, quantidade);
}

function calcularTotal(preco, qtd){
    return preco * qtd;
}

let resultado = processoPedido(30, 50, calcularTotal);

// IMPRIMIR COM TEMPLATE STRING
console.log(`TOTAL DO PEDIDO: ${resultado}`);
