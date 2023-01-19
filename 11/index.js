//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300_000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1_000_000;

// Se meses decorridos for >60 meses(nao paga mais nada)
// Se a renda mensal < 200000 (nao paga)
// se o total ja pago == 1800000 (quitou)
// se a renda for > 200000 , 18% da rendamensal( 18* renda /100)

if (mesesDecorridos > 60) {
    console.log("O aluno não deve mais nada");
} if (rendaMensalEmCentavos < 200_000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
} if (totalJaPagoPeloAluno == 1_800_000) {
    console.log("O aluno não deve pagar mais nada,pois já quitou a dívida.");
} if (rendaMensalEmCentavos > 200_000 && totalJaPagoPeloAluno < 1_800_000) {
    let parcela = (18 * rendaMensalEmCentavos / 100) / 100;
    console.log(`O valor da parcela desse mês é R$ ${parcela} reais`);
}
