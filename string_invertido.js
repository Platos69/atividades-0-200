//Faça um programa que peça ao usuário que digite uma string e imprima a string ao contrário.

function reverseString(str) {
  var newString = ""
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i]
  }
  return newString
}
reverseString("hello")
