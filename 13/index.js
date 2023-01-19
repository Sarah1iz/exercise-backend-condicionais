//credito= 5; cheque= 3; debito ou dinheiro= 10
// valor final = valoedoproduto - (valordoproduto*desconto)

//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento == "credito") {
    let valorFinal = (valorDoProduto - (valorDoProduto * 0.05)) / 100
    console.log(`Valor a ser pago: R$ ${valorFinal.toFixed(2)}`)
} else if (tipoDePagamento == "cheque") {
    let valorFinal = (valorDoProduto - (valorDoProduto * 0.03)) / 100
    console.log(`Valor a ser pago: R$ ${valorFinal.toFixed(2)}`)
} else if (tipoDePagamento == "debito" || tipoDePagamento == "dinheiro") {
    let valorFinal = (valorDoProduto - (valorDoProduto * 0.10)) / 100
    console.log(`Valor a ser pago: R$ ${valorFinal.toFixed(2)}`)
}