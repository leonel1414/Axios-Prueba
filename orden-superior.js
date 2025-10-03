function saludar(nombre){
    console.log("Hola " + nombre);
}


function saludarUsuario(usuario, callback){
    callback(usuario);
}

saludarUsuario("Usuario 1", saludar)




function crearMensaje(saludo){
    return function(nombre){
        console.log(saludo + "," + nombre)
    }
};

const saludoSpanish= crearMensaje('Hola');
saludoSpanish('Leonel');

const multiplicar =(num1, num2) => `El resultado es: ${num1 * num2}`;

const mensaje = multiplicar(7,6);

console.log(mensaje);