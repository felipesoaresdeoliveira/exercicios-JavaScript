// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

let prompt = require('prompt-sync')()

let n1 = parseInt(prompt("Digite um número inteiro: "))
if (n1 % 2 === 0){
    console.log("O número " + n1 + " é par.")
}
else{
    console.log("O número " + n1 + " é ímpar.")
}

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

let prompt = require('prompt-sync')()

let idade = parseInt(prompt("Digite sua idade: "))
if (idade >= 0 && idade <= 12){
    console.log("Você é uma criança.")
}
else if (idade >= 13 && idade <= 17){
    console.log("Você é um adolescente.")
}
else if (idade >= 18 && idade <= 59){
    console.log("Você é um adulto.")
}
else if (idade >= 60){
    console.log("Você é um idoso.")
}

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let prompt = require('prompt-sync')()

let nota = parseFloat(prompt("Digite sua nota (0 a 10): "))

if (nota >= 0 && nota < 4){
    console.log("Você está reprovado.")
}
else if (nota >= 4 && nota < 6){
    console.log("Você está de recuperação.")
}
else if (nota >= 6 && nota <= 10){
    console.log("Você está aprovado.")
}
else{
    console.log("Nota inválida.")
}

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

let prompt = require('prompt-sync')()

console.log("Menu de Opções:")
console.log("1. somar 2 numeros")
console.log("2. subtrair 2 numeros")
console.log("3. sair") 
let opcao = parseInt(prompt("Escolha uma opção: "))

let n1 = 0
let n2 = 0

switch (opcao) {
    case 1:
        n1 = parseInt(prompt("Digite o primeiro número: "))
        n2 = parseInt(prompt("Digite o segundo número: "))
        let soma = n1 + n2
        console.log("A soma é: " + soma)
        break
    case 2:
        n1 = parseInt(prompt("Digite o primeiro número: "))
        n2 = parseInt(prompt("Digite o segundo número: "))
        let subtracao = n1 - n2
        console.log("A subtração é: " + subtracao)
        break
    case 3:
        console.log("Saindo...")
        break
    default:
        console.log("Opção inválida.")
}

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

let prompt = require('prompt-sync')()

console.log("Calculadora de IMC")
let peso = parseFloat(prompt("Digite seu peso (em kg): "))
let altura = parseFloat(prompt("Digite sua altura (em metros ex. 1.74): "))

let imc = peso / (altura * altura)

if (imc < 18.5){
    console.log("Seu IMC é: " + imc) 
    console.log("Você está abaixo do peso.")
}
else if (imc >= 18.5 && imc < 24.9){
    console.log("Seu IMC é: " + imc) 
    console.log("Você está com peso normal.")
}
else if (imc >= 25 && imc < 29.9){
    console.log("Seu IMC é: " + imc) 
    console.log("Você está com sobrepeso.")
}
else{
    console.log("Seu IMC é: " + imc) 
    console.log("Você está obeso.")
}

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

let prompt = require('prompt-sync')()

console.log("Verificador de Triângulo")
let A = parseFloat(prompt("Digite o lado A do triângulo: "))
let B = parseFloat(prompt("Digite o lado B do triângulo: "))
let C = parseFloat(prompt("Digite o lado C do triângulo: "))

if (A < B + C && B < A + C && C < A + B){
    if (A === B && B === C){
        console.log("O triângulo é equilátero.")
    }
    else if (A === B || A === C || B === C){
        console.log("O triângulo é isósceles.")
    }
    else{
        console.log("O triângulo é escaleno.")
    }
}
else{
    console.log("Os lados não formam um triângulo.")
}

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')()

let Tmaca = prompt("Digite o número de maçãs compradas: ")
let preco = 0

if (Tmaca < 12){
    preco = Tmaca * 0.30
}
else {
    preco = Tmaca * 0.25
}

console.log("O valor total da compra é: R$ " + preco)

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

let prompt = require('prompt-sync')()

let n1 = parseInt(prompt("Digite o primeiro número: "))
let n2 = parseInt(prompt("Digite o segundo número: "))

if (n1 == n2) {
    console.log("Os numeros nao podem ser iguais")
}
else{
    console.log("Os números em ordem decrescente são: ")
    if (n1 < n2) {
        console.log(n1)
        console.log(n2)
    }
    else {
        console.log(n2)
        console.log(n1)
    }
}

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let prompt = require('prompt-sync')()
let n1 = parseInt(prompt("Digite um número inteiro: "))
for (let i = 0; i < 10; i++) {
    console.log(n1);
}

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

let prompt = require('prompt-sync')()

let soma = 0

for (let i = 1; i <=5; i++){
    let n1 = parseInt(prompt("Digite o " + i + "º número: "))
    soma += n1
}

console.log("A soma total é: " + soma)

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

let prompt = require('prompt-sync')()
let n1 = parseInt(prompt("Digite um número para ver a tabuada: "))
console.log("Tabuada do " + n1 + ":")

for (let i = 1; i <= 10; i++) {
    let resultado = n1 * i
    console.log(n1 + " x " + i + " = " + resultado)
}

//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

let prompt = require('prompt-sync')()
let soma = 0
let contador = 0

while (true) {
    let n1 = parseFloat(prompt("Digite um número decimal (ou 0 para sair): "))
    if (n1 === 0) {
        break
    }
    soma += n1
    contador++
}
if (contador > 0) {
    let media = soma / contador
    console.log("A média aritmética é: " + media)
}

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

let prompt = require('prompt-sync')()
let n1 = parseInt(prompt("Digite um número para calcular o fatorial: "))
let fatorial = 1
for (let i = n1; i > 0; i--) {
    fatorial *= i
}
console.log("O fatorial de " + n1 + " é: " + fatorial)

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

 let prompt = require('prompt-sync')()
 let seq = prompt("Digite quantos números da sequência de Fibonacci você deseja ver: ")

 let a = 0, b = 1, c = 0
    console.log("Sequência de Fibonacci:")
    for (let i = 0; i < seq; i++) {
        console.log(a)
        c = a + b
        a = b
        b = c
    }

