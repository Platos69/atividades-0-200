//Faça um programa que peça ao usuário que digite um número e imprima se ele é positivo ou negativo.

let numeroReceber = parseInt(prompt("Digite o número: "))

if (isNaN(numeroReceber) || !Number.isInteger(numeroReceber)) {
  alert("Error! Valor inválido.")
  location.reload
} else {
  if (numeroReceber >= 0) {
    alert("Esse número é positivo.")
  } else {
    alert("Esse número é negativo")
  }
}
