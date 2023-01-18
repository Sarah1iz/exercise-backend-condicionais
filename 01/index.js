const jogada1 = "pedra"
const jogada2 = "tesoura"
//aqui imprime PEDRA
//imprimir o nome da jogada vencedora ou empate
//pedra,papel ou tesoura

if (jogada1 === "pedra" && jogada2 === "tesoura" || jogada1 === "tesoura" && jogada2 === "pedra") {
    console.log("pedra");
} if (jogada1 === "pedra" && jogada2 === "papel" || jogada1 === "papel" && jogada2 === "pedra") {
    console.log("papel");
} if (jogada1 === "tesoura" && jogada2 === "papel" || jogada1 === "papel" && jogada2 === "tesoura") {
    console.log("tesoura");
} else if (jogada1 === jogada2) {
    console.log("empate");
}

