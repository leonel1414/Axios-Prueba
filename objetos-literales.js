//const persona = new Object();

//persona.nombre = 'Leo';
//persona.apellido = 'Girett';

const persona = {
    nombre: 'Leonel',
    apellido: 'Girett',
    edad : 32,
    isAdmin: true,
    idiomas: ["Español", "Ingles"],
    direccion: {
        calle:'Calle falsa',
        numero: 123
    },
    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`;
    },
    saludar: function(){
        console.log(`Mi nombre es: ${this.nombreCompleto()}`)
    }
};

persona.telefono = 123456789;

delete persona.edad;

//cambio de datos
persona.nombre = 'Mauricio';

//muestra
console.log(persona.nombre, persona['apellido']);

persona.saludar();