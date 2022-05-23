const boton = document.getElementById('texto')
const sumar = (operando1, operando2) => {
    return operando1 + operando2;
}
const multi = (a,b) => {
    return a * b;
}
boton.addEventListener('click', function(){
   console.log(sumar(2,2), multi(2,4)) 
});
