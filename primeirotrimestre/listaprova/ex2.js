let numero = parseInt(prompt("Digite o número"))

if (numero>=100){
  console.log("O número é maior que 100")
}
else{
  let dezena = numero/10
  console.log(dezena)
  let unidade = numero%10
  console.log(unidade)
  let soma = dezena+unidade
  console.log("A soma dos dígitos é: ", soma) 
}
