//Faça um programa que peça ao usuário que digite uma string e imprima quantas consoantes há na string

let consoantesReceber = prompt('Digite uma palavra para saber quantas consoantes possui: ')

let consoantes = 0

debugger

//foi usado && porque caso fosse || ele só ia receber um ou outro
for (let i = 0; i < consoantesReceber.length /*pegar o tamanho da string*/; i++) {
  let letra = consoantesReceber.charAt(i) //para verificar a letra especifica ou a string do momento
  if (letra !== 'a' && letra !== 'e' && letra !== 'i' && letra !== 'o' && letra !== 'u') {
    consoantes++
  }
}

console.log(`Há ${consoantes} consoantes na palavra.`)
