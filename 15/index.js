//apenas o apelido(opcional) || primeiro nome + sobrenome(opcional) || apenas o primeiro nome(obrogatorio)
// USAR THUTHINESS

const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

if (primeiroNome && sobrenome && apelido) {
    console.log(apelido);
} if (primeiroNome && sobrenome && !apelido) {
    console.log(`${primeiroNome} ${sobrenome}`);
} if (primeiroNome && !sobrenome && !apelido) {
    console.log(primeiroNome);
} else if (primeiroNome && !sobrenome && apelido) {
    console.log(apelido);
} else {
    console.log("Insira um nome")
}