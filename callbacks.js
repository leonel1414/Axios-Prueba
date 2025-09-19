/*const multiplicar = (num1,num2) => num1 * num2;

const calculadora = (num1,num2,callback) =>{
    return callback(num1,num2);
};

const resultado = calculadora(2,2,multiplicar());
console.log(resultado);
*/

// ---

const multiplicar = (num1, num2, callback) => {
    setTimeout(() =>{
        callback( num1, num2, num1 * num2)
    },2000)
};

const mostrar = (a, b, c) =>{
    console.log(`${a} * ${b} = ${c}`);
};

multiplicar(2,2,mostrar);