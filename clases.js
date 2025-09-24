class Persona1{
    #dni;
    _nombre;
    edad;

    constructor(dni,nombre,edad){

        this.#dni = dni;
        this._nombre = nombre;
        this.edad = edad;
    }


    getDni(){
        return this.#dni;
    }

    setDni(dni){
        this.#dni = dni;
    }
}


class Persona{
    constructor( nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar(){
        return (`Mi nombre es: ${this.nombre} ${this.apellido}`);
    }
};

//const persona1 = new Persona('Juan', 'Peréz');

//console.log(persona1);

//persona1.saludar();


//EXTENDS
class Empleado extends Persona {
    
    constructor(nombre,apellido,cargo){
        
        super(nombre,apellido);
        this.cargo = cargo;
    }

    trabajoDe(){

        console.log(`Trabajo de ${this.cargo}`);
    }
}



const empleado1 = new Empleado('Leonel', 'Girett','SysAdmin');

const mensaje = empleado1.saludar();

console.log(mensaje)

empleado1.trabajoDe();




// # Protegido _ Publico 

const persona1 = new Persona1(123,'Leo',32);

persona1.setDni(33);

console.log(persona1,'edad:'+persona1.getDni());

