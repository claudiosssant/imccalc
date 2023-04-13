var peso;
var altura;
var imc;
var resultado;

function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura * altura);

    resultado = document.getElementById('resultado');

   if(imc < 17){
    alert(`Seu resultado foi: ${imc}, você está muito abaixo do peso!!!`) 
   }else if(imc > 17 && imc <= 18.49){
    alert(`Seu resultado foi: ${imc}, você está abaixo do peso!`)
   }else if(imc >=18.5 && imc < 24.99){
    alert(`Seu resultadom foi: ${imc}, você está no peso ideal!`)
   }else if(imc > 25 && imc <= 29.99){
    alert(`Seu resultado foi: ${imc}, você está acima do peso!`)
   }else if(imc >= 30){
    alert(`Seu resultado foi: ${imc}, você está obeso!!!`)
   }


document.getElementById('peso').value = '';
document.getElementById('altura').value = '';
}
