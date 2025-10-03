const numeros = [100,50,20.99,12.5,75];

numeros.forEach((numero, index) =>{
    numeros[index] = Number((numeros * 1.1).toFixed(2));

    // numero *= 1.1;

    console.log(`El numero aumento es: ${numeros[index]}`);

});

//for in
for (const index in numeros) {

    numeros[index] = Number((numeros[index] * 1.1).toFixed(2));
    console.log(`El numero aumento es: ${numeros[index]}`);

}

//for off -> para objetos
for(let numero of numeros){
    numero = Number((numeros * 1.1).toFixed(2));
    console.log(`El numero es: ${numero}`);

}

//map
nuevoArray = numeros.map(numero => Number((numero *1.1).toFixed(2)));

nuevoArray.forEach((numero) => console.log(`El numero es: ${numero}`));

console.log(numeros,nuevoArray);

