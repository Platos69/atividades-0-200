//Faça um programa que peça ao usuário que digite uma string e imprima a string ao contrário.

function reverseString(str) {
  if (str === "") return ""
  else return reverseString(str.substr(1)) + str.charAt(0)
}
reverseString("hello")
