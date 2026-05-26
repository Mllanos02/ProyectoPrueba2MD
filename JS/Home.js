//Variables para el formulario
const form = document.getElementById("email_form");
const name = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const hora = document.getElementById("hora");
const fecha = document.getElementById("fecha");
//Fecha de hoy
let data = new Date();
//Variables para el carrousel
let ImagenActual = 0;
const carrousel = document.getElementById("Carros")
//Fecha de hoy traduciada para la validacion
fecha.value = data.toLocaleDateString('en-CA');
//Funcion para añadir un cero adelante si los minutos son menores a 10
if (data.getMinutes() < 10){
    hora.value = data.getHours()  + ":0" +  data.getMinutes()
} else{
    hora.value = data.getHours() + ":"  + data.getMinutes()
}
let Seccion = document.getElementById("Secc");
const resultado = document.getElementById("Resultat");
let error = "";
let imagen = document.getElementById("Imagen");
//Variables para el cambio de texto.
let Grocery = '       <div class="Lado">\n' +
    '          <img src="../Imagenes/cama.webp" alt="Icono de una cama">\n' +
    '          <div>\n' +
    '            <h3>\n' +
    '              Trader\'s Joe\n' +
    '            </h3>\n' +
    '            <h5>\n' +
    '              6 min walk\n' +
    '            </h5>\n' +
    '            <p> Popular Grocery Store with high-quality selections </p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="Lado">\n' +
    '          <img src="../Imagenes/cama.webp" alt="Icono de una cama">\n' +
    '          <div>\n' +
    '            <h3>\n' +
    '              Whole Foods Market\n' +
    '            </h3>\n' +
    '            <h5>\n' +
    '              10 min walk\n' +
    '            </h5>\n' +
    '            <p> Premium organic produce and gourmet ingredients</p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="Lado">\n' +
    '          <img src="../Imagenes/cama.webp" alt="Icono de una cama">\n' +
    '          <div>\n' +
    '            <h3>\n' +
    '              City Point BLNK\n' +
    '            </h3>\n' +
    '            <h5>\n' +
    '              8-10 min walk\n' +
    '            </h5>\n' +
    '            <p> Retail center with Trader Joe\'s, Target, Dekalb Market</p>\n' +
    '          </div>\n' +
    '        </div>'
let Dining = ' <div class="Lado">\n' +
    '          <img src="../Imagenes/Comida.webp" alt="Icono de un tenedor y cuchillo">\n' +
    '          <div>\n' +
    '            <h3>\n' +
    '              Grau Dinner' +
    '            </h3>\n' +
    '            <h5>\n' +
    '              8 min walk\n' +
    '            </h5>\n' +
    '            <p> Perfect restaurant for an evening dinner</p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="Lado">\n' +
    '          <img src="../Imagenes/Comida.webp" alt="Icono de un tenedor y cuchillo">\n' +
    '          <div>\n' +
    '            <h3>\n' +
    '              Salt and Pepper' +
    '            </h3>\n' +
    '            <h5>\n' +
    '              15 min walk\n' +
    '            </h5>\n' +
    '            <p> One of the most well valuted restaurant of the city</p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="Lado">\n' +
    '          <img src="../Imagenes/Comida.webp" alt="Icono de un tenedor y cuchillo">\n' +
    '          <div>\n' +
    '            <h3>\n' +
    '              Niko Cafe' +
    '            </h3>\n' +
    '            <h5>\n' +
    '              6 min walk\n' +
    '            </h5>\n' +
    '            <p> The perfect spot to start the day with a delicious breakfast</p>\n' +
    '          </div>\n' +
    '        </div>\n';
let Transportation =
    '        <div class="Lado">\n' +
    '          <img src="../Imagenes/Coche.webp" alt="Icono de un coche">\n' +
    '          <div>\n' +
    '            <h3>\n' +
    '              Grand Mesa Bus Station' +
    '            </h3>\n' +
    '            <h5>\n' +
    '              10 min walk\n' +
    '            </h5>\n' +
    '            <p> An bus station dedicated to travel across the city at fast speed</p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="Lado">\n' +
    '          <img src="../Imagenes/Coche.webp" alt="Icono de un coche">\n' +
    '          <div>\n' +
    '            <h3>\n' +
    '              Bike4Hire' +
    '            </h3>\n' +
    '            <h5>\n' +
    '              5 min walk\n' +
    '            </h5>\n' +
    '            <p> A shop where you can hire a bike to use to move arround the city</p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="Lado">\n' +
    '          <img src="../Imagenes/Coche.webp" alt="Icono de un coche">\n' +
    '          <div>\n' +
    '            <h3>\n' +
    '              Grand Mesa Aeroport' +
    '            </h3>\n' +
    '            <h5>\n' +
    '              20 min walk\n' +
    '            </h5>\n' +
    '            <p> The great hub that connects the city to other parts of the globe</p>\n' +
    '          </div>\n' +
    '        </div>\n';
let Education =
    '        <div class="Lado">\n' +
    '          <img src="../Imagenes/Libro.webp" alt="Icono de un libro">\n' +
    '          <div>\n' +
    '            <h3>\n' +
    '              Grand Mesa Highschool' +
    '            </h3>\n' +
    '            <h5>\n' +
    '              7 min walk\n' +
    '            </h5>\n' +
    '            <p> An well-valorated high school that will give your child a great education</p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="Lado">\n' +
    '          <img src="../Imagenes/Libro.webp" alt="Icono de un libro">\n' +
    '          <div>\n' +
    '            <h3>\n' +
    '              Private Language School' +
    '            </h3>\n' +
    '            <h5>\n' +
    '              3 min walk\n' +
    '            </h5>\n' +
    '            <p> One of the bests schools to learn another language</p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="Lado">\n' +
    '          <img src="../Imagenes/Libro.webp" alt="Icono de un libro">\n' +
    '          <div>\n' +
    '            <h3>\n' +
    '              Little Doggy Kindergarden' +
    '            </h3>\n' +
    '            <h5>\n' +
    '              6 min walk\n' +
    '            </h5>\n' +
    '            <p> An kindergarden for small childs that will teach and play</p>\n' +
    '          </div>\n' +
    '        </div>\n';
let Hospitals = '        <div class="Lado">\n' +
    '          <img src="../Imagenes/Cruz.webp" alt="Icono de un cruz medica">\n' +
    '          <div>\n' +
    '            <h3>\n' +
    '              Grand Mesa Hospital' +
    '            </h3>\n' +
    '            <h5>\n' +
    '              20 min walk\n' +
    '            </h5>\n' +
    '            <p> The main hospital of grand mesa, helping and curing patients since 1978</p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="Lado">\n' +
    '          <img src="../Imagenes/Cruz.webp" alt="Icono de un cruz medica">\n' +
    '          <div>\n' +
    '            <h3>\n' +
    '              Private Clinic John Medic' +
    '            </h3>\n' +
    '            <h5>\n' +
    '              10 min walk\n' +
    '            </h5>\n' +
    '            <p> An private clinic to help patients with an high outcome of money</p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="Lado">\n' +
    '          <img src="../Imagenes/Cruz.webp" alt="Icono de un cruz medica">\n' +
    '          <div>\n' +
    '            <h3>\n' +
    '              Little Pet Clinic' +
    '            </h3>\n' +
    '            <h5>\n' +
    '              5 min walk\n' +
    '            </h5>\n' +
    '            <p> Clinic dedicated to help small animals</p>\n' +
    '          </div>\n' +
    '        </div>\n';
let Parks =
    '        <div class="Lado">\n' +
    '          <img src="../Imagenes/Arbol.webp" alt="Icono de un arbol">\n' +
    '          <div>\n' +
    '            <h3>\n' +
    '              Jane Forests Park' +
    '            </h3>\n' +
    '            <h5>\n' +
    '              6 min walk\n' +
    '            </h5>\n' +
    '            <p> A park dedicated to Grand Mesa greatest hero, Jane Forests </p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="Lado">\n' +
    '          <img src="../Imagenes/Arbol.webp" alt="Icono de un arbol">\n' +
    '          <div>\n' +
    '            <h3>\n' +
    '              Vibes Plaza' +
    '            </h3>\n' +
    '            <h5>\n' +
    '              6 min walk\n' +
    '            </h5>\n' +
    '            <p> A plaza in the center of the city that reunites a lot of people every day</p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="Lado">\n' +
    '          <img src="../Imagenes/Arbol.webp" alt="Icono de un arbol">\n' +
    '          <div>\n' +
    '            <h3>\n' +
    '              The golden river' +
    '            </h3>\n' +
    '            <h5>\n' +
    '              6 min walk\n' +
    '            </h5>\n' +
    '            <p> A river that was rumored to have gold nuggets during the gold fever</p>\n' +
    '          </div>\n' +
    '        </div>\n';


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

function CambiarImagen(number, boton){
    const botones = document.querySelectorAll("#planes button");
    botones.forEach(botin => {
        botin.classList.remove("Selecionada");
    });
    boton.classList.add("Selecionada");
    if (number === 1){
        imagen.innerHTML = '<img src="../Imagenes/Plano2.webp" alt="Plano de la planta 2 de una casa">'
    } else {
        imagen.innerHTML = '<img src="../Imagenes/plano.webp" alt="Plano de la planta 1 de una casa">'
    }
}

function CambiarTexto(number, boton){
    //Permite cambiar el texto segun el valor asociado en el boton
    const botones = document.querySelectorAll("#tienda button");
    botones.forEach(botin => {
        botin.classList.remove("Selecionada");
    });
    boton.classList.add("Selecionada");
    if (number === 1){
        console.log(number)
        Seccion.innerHTML = Grocery
    } else if (number === 2)  {
        console.log(number)
        Seccion.innerHTML = Dining
    } else if (number === 3)  {
        Seccion.innerHTML = Transportation
    } else if (number === 4)  {
        Seccion.innerHTML = Education
    } else if (number === 5)  {
        Seccion.innerHTML = Hospitals
    } else {
        Seccion.innerHTML = Parks
    }
}

function Carrousel(numero){
    console.log("Voy")
    //El numero del carrousel siempre empieza en 0, se va sumando segun el valor del boton (1 o -1)
    ImagenActual = ImagenActual + numero;
    //Si el numero es mayor a 4, vuelve a 0. Y al reves, si es menor a 0, vuelve a 4
    if (ImagenActual >= 4){
        ImagenActual = 0;
    } else if ( ImagenActual < 0){
        ImagenActual = 4;
    }
    if (ImagenActual === 0){
        carrousel.innerHTML = '<img src="../Imagenes/Casa.webp" class="MargenAuto" alt="Imagen de una casa">'
    } else if (ImagenActual === 1){
        carrousel.innerHTML = '<img src="../Imagenes/Casa2.webp" class="MargenAuto" alt="Imagen de una casa">'
    } else if (ImagenActual === 2){
        carrousel.innerHTML = '<img src="../Imagenes/Casa3.webp" class="MargenAuto" alt="Imagen de una casa">'
    } else if (ImagenActual === 3){
        carrousel.innerHTML = '<img src="../Imagenes/Casa4.webp" class="MargenAuto" alt="Imagen de una casa">'
    } else if (ImagenActual === 4){
        carrousel.innerHTML = '<img src="../Imagenes/Casa5.webp" class="MargenAuto" alt="Imagen de una casa">'
    }
    console.log(ImagenActual)
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