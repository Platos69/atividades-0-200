const numeroReceber = parseInt(prompt("Digite o valor do número: "))
let expressao = ""

for (let contador = 2; contador <= numeroReceber; contador++) {
  //define let como zero apos cada loop
  let divisores = 0

  for (let i = 1; i <= numeroReceber; i++) {
    if (contador % i === 0) {
      divisores++
    }
  }
  //motivo da if esta fora da for é pra que não seja ignorado o === 2, caso ela esteja dentro do for acima acontece o que foi relatado
  if (divisores === 2) {
    expressao += `${contador},`
  }
}

// Removendo o último "," extra no final da expressão
expressao = expressao.slice(0, -1)

console.log(expressao)
