//Requisição de dados
const produtos = require('./dados');

// 2º

function filtrar(produtos) {
    return produtos.valor >= 482 && produtos.valor <= 1600 && produtos.qualidade > 6 && produtos.status === true;
};


let carrinho = produtos.filter(filtrar)

console.log(carrinho);
console.table(carrinho);

// 3º
const valorTotal = carrinho.reduce(function(acumulador, valorAtual) {
    return acumulador.valor + valorAtual.valor;
}); 

console.log(`O valor total dos produtos no carrinho é de R$ ${valorTotal},00`)