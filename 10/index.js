let vogalMaiuscula = ["A", "E", "I", "O", "U"];
let vogalMinuscula = ["a", "e", "i", "o", "u"];
let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


const caractere = "E";


if (numero.includes(caractere)) {
    console.log("número");
} else if (vogalMaiuscula.includes(caractere)) {
    console.log("vogal maiúscula");
} else if (vogalMinuscula.includes(caractere)) {
    console.log("vogal minúscula");
} else {
    console.log("consoante");
}

