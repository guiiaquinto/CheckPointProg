let produtos = require("./dados");

let carrinho = produtos.filter(produto => produto.preco >= 482 && produto.preco <= 1600 && produto.qualidade > 6 && produto.status === true)


function resumoDoCarrinho() {
    console.log("Produtos no carrinho:");

    carrinho.forEach(produto => {
        console.log(`Produto: ${produto.nome}`)
        console.log(`Preço: R$ ${produto.preco}`)
    });

    console.log(`O total é: R$ ${carrinho.reduce((acc, produto) => acc + produto.preco, 0)}`);
}


resumoDoCarrinho();
console.table(carrinho);
