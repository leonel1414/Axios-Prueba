const multiplicar = (num1,num2) => num1 * num2;

const calculadora = (num1,num2,callback) =>{
    return callback(num1,num2);
};

const resultado = calculadora(2,2,calculadora());
console.log(resultado);

