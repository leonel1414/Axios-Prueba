const num1 = [1,2,33];
const num2 = [33,4,5,6];

//const num3 = num1.concat(num2);
const num3 = [...num1,...num2];
console.log(num3);

const personal = {
    nombre: "Leonel",
    apellido: "Girett",
    edad: 33,
};

const oficio = {
    nombre: "Mauricio",
    oficio: "Ingeniero",
    edad: 33,
};
