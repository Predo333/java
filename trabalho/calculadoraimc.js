let peso = Number(prompt("Digite seu peso"))
let altura = Number(prompt("Digite sua altura"))

let imc =(peso/(altura*altura))

if (imc <=0 ) {
console.log("Digite um valor válido")

}
else if (imc <=18.5 ) {
console.log("Abaixo do peso")
}

else if (imc >=18.5 && imc <24.9){
console.log("Peso Normal")
}

else if (imc >=25.0 && imc <29.9){
console.log("Sobrepeso")
}
