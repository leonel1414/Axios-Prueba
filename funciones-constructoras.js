/*const persona ={
    nombre:'Juan',
    apellido: 'Girett',
    edad: 32
}
*/

function Persona(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

//Persona.prototype.saludar = function(){

  //  console.log(`Hola soy ${this.nombre} ${this.apellido}`)
//}

//const persona = new Persona('Leonel','Girett',32);

//console.log(persona)

//persona.saludar();


function Empleado(nombre,apellido,edad,salario){}

Empleado.prototype = Object.create(Persona);

const empleado1 = new Empleado('Leonel','Girett',32,1000);