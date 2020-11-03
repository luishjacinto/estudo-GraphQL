module.exports = {
    precoComDesconto(produto){
        return produto.valor - produto.valor*(produto.desconto)
    }
}