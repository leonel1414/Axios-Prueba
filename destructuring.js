//arrays
const persona = ['Juan', 'Perez', 30, 2000 , 'Ingeniero'];

const [nombre, apellido, edad, salario, profesion] = persona;

console.log(nombre, apellido, edad, salario, profesion);


//objetos
const persona1 ={
    nombre1: "juan",
    apellido1: "perez",
    edad1: 30,
    salario1: 2000,
    profesion1: "Tecnico"
};


const {nombre1, apellido1,edad1, salario1, profesion1} = persona1;

console.log(nombre1, apellido1,edad1, salario1, profesion1);