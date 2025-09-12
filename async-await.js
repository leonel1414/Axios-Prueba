/*const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved!');
    }, 2000);
});
*/
//promise
//    .then((promise) => console.log(promise))
//    .catch((error) => console.error(error));

/*
async function main(){
    try{
        const result = await promise;
        console.log(result);

    } catch (error){
        console.error(error);
    }
};

main();
*/

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const multiplicar = (num1, num2) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return Promise.reject('Ambos valores deben ser numéricos');
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                num1, num2, resultado: num1 * num2
            });
        }, random(1000, 3000));
    });
}

async function tabla(){
    try {
        let response = await multiplicar(3,5);
        console.log(`${response.num1} * ${response.num2} = ${response.resultado}`);

        response = await multiplicar(3,6);
        console.log(`${response.num1} * ${response.num2} = ${response.resultado}`);

        response = await multiplicar(3,7);
        console.log(`${response.num1} * ${response.num2} = ${response.resultado}`);
        
    } catch (error) {
        console.error(error);
    }
};

tabla();