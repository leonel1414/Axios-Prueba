/*const multiplicar = (num1,num2) => num1 * num2;

const calculadora = (num1,num2,callback) =>{
    return callback(num1,num2);
};

const resultado = calculadora(2,2,multiplicar());
console.log(resultado);
*/

// ---
const random = (min, max) => Math.floor(Math.random() * (max - min +1 ) + min);

const multiplicar = (num1, num2, callback) => {
    setTimeout(() =>{
        callback( num1, num2, num1 * num2)
    },random(500, 1500));
    //1000
};

const mostrar = (a, b, c) =>{
    console.log(`${a} * ${b} = ${c}`);
};

multiplicar(2,2,mostrar);
multiplicar(2,3,mostrar);
multiplicar(2,4,mostrar);
multiplicar(2,5,mostrar);

multiplicar(2, 6,(a, b, c) =>{
    console.log(`${a} * ${b} = ${c}`)

    multiplicar(2,7,(a, b, c) =>{
     console.log(`${a} * ${b} = ${c}`)
    
        multiplicar(2,8,(a, b, c) =>{
         console.log(`${a} * ${b} = ${c}`)
    
        });
    });
});

