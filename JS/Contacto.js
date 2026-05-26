//Variables para el formulario
const form = document.getElementById("email_form");
const name = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const hora = document.getElementById("hora");
const fecha = document.getElementById("fecha");
//Fecha de hoy
let data = new Date();
//Fecha de hoy traduciada para la validacion
fecha.value = data.toLocaleDateString('en-CA');
//Funcion para añadir un cero adelante si los minutos son menores a 10
if (data.getMinutes() < 10){
    hora.value = data.getHours()  + ":0" +  data.getMinutes()
} else{
    hora.value = data.getHours() + ":"  + data.getMinutes()
}
const resultado = document.getElementById("Resultat");
let error = "";



//Funcion de validacion de formulario
function ValidacionEmail(){
    //Si el nombre es menor a 2 caracteres, da error
    if (name.value.trim().length < 2){
        error = "El nombre es incorrecto o se encuentra vacio"
        return false
    }
    //Si el email no contiene ni . ni @, da error
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()))){
        error = "Email incorrecto"
        return false
    }
    let data = new Date();
    let input = new Date(fecha.value)
    //Si la fecha puesta es menor a la de hoy, da error
    if (input < data){
        error = "La fecha tiene que ser de antes de hoy"
        return false
    }
    console.log(hora.value)
    let valorhora =  hora.value
    let separado = valorhora.split(":");
    //Si la hora no forma parte de entre las 12 y las 20, da error
    if (separado[0] < 12 || separado[0] > 20){
        error = "Hora no permitida"
        return false
    }
    //Si el mensaje es menor a 20 caracteres, da error
    if (mensaje.value.trim().length < 20){
        error = "El mensaje es demasiado corto"
        return false
    }
    //Si las otra validaciones estan bien, dara bien
    return true;
}


//Este evento esta creado para que al hacer submit, no se reinicie la pagina entera.
form.addEventListener("submit", function (event) {
    event.preventDefault();

    resultado.innerHTML = "";

    if (ValidacionEmail()) {
        resultado.innerHTML = "Formulario completado";
    } else {
        resultado.innerHTML = error;
    }
});