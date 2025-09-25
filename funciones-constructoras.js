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

const persona = new Persona('Leonel','Girett',32);

console.log(persona)
