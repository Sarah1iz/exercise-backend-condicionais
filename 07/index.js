// isentos= portador de doença, aposentados = 
// vaza = rendimento < 28_599.70
// paga = rendimento > 28_599.70 

const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

if (aposentada && portadoraDeDoenca || aposentada || portadoraDeDoenca) {
    console.log("ISENTA");
} if (!aposentada && !portadoraDeDoenca && totalDeRendimentos < 28_599.70) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
} else if (!aposentada && !portadoraDeDoenca && totalDeRendimentos > 28_599.70) {
    console.log("PEGA LEAO");
}                                   