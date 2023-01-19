//saber o valor restante para pagamento
//saber quantas parcelas faltam

//valor do produto comprado(em centavos).
const valorDoProduto = 100000;
//quantidade de parcelas
const quantidadeDoParcelamento = 10;
//valor pago(em reais)
const valorPago = 300;
//R= restam 7 parcelas de R$ 100

// valor de 1 parcela: valor do produto /quantidade de parcelar (100)
// falta = valor do produto - valor pago (700)
// parcelas em falta = falta / valor de 1 parcela (7)

//valorDaParcela = (valorDoProduto / 100) / quantidadeDoParcelamento;
//valorQueFalta = (valorDoProduto / 100) - valorPago;
//parcelasEmFalta = falta / valorDaParcela;

if (valorPago < (valorDoProduto / 100)) {
    let valorDaParcela = (valorDoProduto / 100) / quantidadeDoParcelamento;
    let valorQueFalta = (valorDoProduto / 100) - valorPago;
    let parcelasEmFalta = valorQueFalta / valorDaParcela;
    console.log(`Restam ${parcelasEmFalta} parcelas de R$ ${valorDaParcela}`);
}
