/*
ATALHO COMENTARIO DE VARIAS LINHAS
alt + shift +A

DESAFIO:
    Criar uma funcao que receba preco e desconto em % e mostre o valor final com desconto. 
    Criar outra funcao que receba preco e quantidade e mostre o valor total da compra.
*/
function calcularDesconto(desconto, preco){
  const valorFinal = preco - (preco * (desconto / 100));
  console.log(`O VALOR FINAL E DE: ${valorFinal}`)
}
calcularDesconto(1000, 5);

function calcularTotal(preco, quantidade){
    const valorTotal = preco * quantidade;
    console.log(`O VALOR TOTAL E DE: ${valorTotal}`);

}
calcularTotal(100, 12)
 console.log(`O DESCONTO É DE: ${valorFinal}`);
 console.log(`O TOTAL É DE: ${valorTotal}`);
