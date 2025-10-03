const numeros = [100,50,20.99,12.5,75];

numeros.forEach((numero, index) =>{
    numeros[index] = Number((numeros * 1.1).toFixed(2));

    // numero *= 1.1;
    
    console.log(`El numero aumento es: ${numeros[index]}`);

});

