// < 1.5 = ALTO (Risco Alto - Você está ingerindo pouquissima água, beba mais água!)
// 1.5 - 3.0 = MODERADO (Risco Moderado - Você está ingerindo pouca água, beba mais!)
// >3 = BAIXO (Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!)

//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;

if (quantidadeDeAguaIngerida < 1.5) {
    console.log("Risco Alto - Você está ingerindo pouquissima água, beba mais água!");
} else if (quantidadeDeAguaIngerida >= 1.5 && quantidadeDeAguaIngerida <= 3.0) {
    console.log("Risco Moderado - Você está ingerindo pouca água, beba mais!");
} else {
    console.log("Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!");
}
