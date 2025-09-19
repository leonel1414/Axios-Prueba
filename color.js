const autos = [
    { marca: "ford", modelo: "fiesta", año:2010, color: "rojo"},
    { marca: "chevrolet", modelo: "onix", año:2011, color: "azul"},
    { marca: "toyota", modelo: "corolla", año:2012, color: "blanco"},
    { marca: "honda", modelo: "civic", año:2013, color: "negro"},
    { marca: "hyundai", modelo: "elantra", año:2013, color: "rojo"},
];

/*
function contarPorColor(){
    let contador = 0;

    autos.forEach((auto) =>{
        if(auto.color.toLocaleLowerCase() == colorBuscado.toLocaleLowerCase()){
            contador++;
        }
    });
    console.log(`Hay ${contador} autos de color ${colorBuscado}`);
}
*/

function contarPorColor(){
    let contador = 0;

    autos.forEach((auto) =>{
        if(auto.color.toLocaleLowerCase() == colorBuscado.toLocaleLowerCase()){
            contador++;
        }
    });
    console.log(`Hay ${contador} autos de color ${colorBuscado}`);
}


colorBuscado('rojo');