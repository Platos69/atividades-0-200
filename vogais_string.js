//Faça um programa que peça ao usuário que digite uma string e imprima quantas vogais há na string

let vogaisReceber = prompt('Digite uma palavra para saber quantas vogais possui: ')

let vogais = 0

for (let i = 0; i < vogaisReceber.length /*pegar o tamanho da string*/; i++) {
  let letra = vogaisReceber.charAt(i) //para verificar a letra especifica ou a string do momento
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    vogais++
  }
}

console.log(`Há ${vogais} vogais na palavra.`)
