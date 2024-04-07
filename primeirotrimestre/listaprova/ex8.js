let lado1=(Number (prompt("Digite o lado 1: ")))
let lado2=(Number (prompt("Digite o lado 2: ")))
let lado3=(Number (prompt("Digite o lado 3: ")))


if (lado1==0 || lado2==0 || lado3==0){
 window.alert ("Não é um triângulo. ")
}
 else{
 if (lado1==lado2 && lado2==lado3) {
 window.alert ("O triângulo é equilátero. ")
 }
 else if (lado1==lado2 || lado2==lado3 || lado1==lado3){
 window.alert ("O triângulo é isósceles. ")
 }
 else{
 window.alert ("O triângulo é escaleno. ")
  }
   
