//não permite: < 12 , > 65 , patologia cardiaca, < 150
// tabela: 10 reais(estudante OU < 18(meia entrada)) / 20 reais(caso contrário)
// Imprimir = 1.não pode brincar = ACESSO NEGADO; 
// 2. 10 reais
// 3. 20 reais 
const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;
// esse exemplo a resposta é 20 reais.


if (idade < 12 || idade > 65 || possuiPatologia || altura < 150) {
    console.log("ACESSO NEGADO");
} else {
    if (ehEstudante || idade < 18 && altura > 150 && !possuiPatologia) {
        console.log("10 reais");
    } else {
        console.log("20 reais");
    }
}


