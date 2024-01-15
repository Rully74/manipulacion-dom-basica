console.log("Hello, estoy conectada");

const h1 = document.querySelector("h1");
const form = document.querySelector("#formulario");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btnSuma = document.querySelector("#btnSuma");
const txtResultado = document.querySelector("#resultado");

//Summit funcional
//form.addEventListener('submit', btnOnClickSuma);
//
//function btnOnClickSuma(event){
//    //console.log(event);
//    event.preventDefault();
//    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
//    txtResultado.innerText = "Resultado: " + sumaInputs;
//}

//Metodo boton clase
//btnSuma.addEventListener('click', btnOnClickSuma);
//function btnOnClickSuma(){
//    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
//    txtResultado.innerText = "Resultado: " + sumaInputs;
//}

//Metodo mio para probar el mouseover
btnSuma.addEventListener('mouseover', btnOnClickSuma);
function btnOnClickSuma(){
    alert("Seguro quieres sumar estos numeros cerebrito?")
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    txtResultado.innerText = "Resultado: " + sumaInputs;
}