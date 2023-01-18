// <180 = reprovado
// >= 180 && <= 185 = líbero
// >= 186 && <= 195 = ponteiro
// >=196 && <=205 = oposto
// >205 = central
const alturaEmCm = 185;

if (alturaEmCm >= 180 && alturaEmCm <= 185) {
    console.log("LÍBERO");
} if (alturaEmCm >= 186 && alturaEmCm <= 195) {
    console.log("PONTEIRO");
} if (alturaEmCm >= 196 && alturaEmCm <= 205) {
    console.log("OPOSTO");
} if (alturaEmCm > 205) {
    console.log("CENTRAL");
} else if (alturaEmCm < 180) {
    console.log("REPROVADO")
}

