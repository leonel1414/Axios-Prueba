/*const promise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('ok');
    },1000);
});

promise
.then((response) =>{
    console.log(response);
})
.catch((error) =>{
    console.error(error);
});
*/
const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const multiplicar = (num1, num2) =>{
    
    if(typeof num1 != 'number' || typeof num2 != 'number'){
        return Promise.reject("Los parametros tiene que ser números")
    }

    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve({
                num1, num2, resultado: num1 * num2,
            });
        },random(500, 1500));
    });
};

multiplicar(2,3)
.then((response) =>{
    console.log(`${response.num1} * ${response.num2} = ${response.resultado} `);
})
.catch((error) =>{
    console.log(error);
});