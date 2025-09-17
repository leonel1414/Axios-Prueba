const multiplicar = (num1,num2) => num1 * num2;

const calculadora = (num1,num2,callback) =>{
    return callback(num1,num2);
};

const resultado = calculadora(2,2,calculadora());
console.log(resultado);

//https://www.youtube.com/watch?v=oxG5nTUQy9M&list=PLxXpfdBOyZ_VOq9nU9G1zq2hsIQ27Vnhd&index=6
