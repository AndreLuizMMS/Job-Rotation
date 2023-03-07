// Solicita ao usuário um número inteiro
let num = parseInt(prompt('Digite um número inteiro: '));

// Inicializando a sequência de Fibonacci
let a = 0;
let b = 1;
let proximo = a + b;

// Verificando se o número pertence à sequência de Fibonacci
while (proximo <= num) {
  if (proximo === num) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
    break;
  }
  a = b;
  b = proximo;
  proximo = a + b;
}

if (proximo > num) {
  console.log(`${num} não pertence à sequência de Fibonacci.`);
}
