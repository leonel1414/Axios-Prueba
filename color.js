const autos = [
    { marca: "ford", modelo: "fiesta", año:2010, color: "rojo"},
    { marca: "chevrolet", modelo: "onix", año:2011, color: "azul"},
    { marca: "toyota", modelo: "corolla", año:2012, color: "blanco"},
    { marca: "honda", modelo: "civic", año:2013, color: "negro"},
    { marca: "hyundai", modelo: "elantra", año:2013, color: "rojo"},
    { marca: "ford", modelo: "focus", año:2016, color: "rojo"},
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

function contarPorColor(colorBuscado, items){
    //let contador = 0;

    //autos.forEach((auto) =>{
        //if(auto.color.toLocaleLowerCase() == colorBuscado.toLocaleLowerCase()){
            //contador++;
        //}
    //});

    //DESESTRUCTURACION PARA OBTENER COLOR
    /*autos.forEach(({color}) =>{
        if(color.toLocaleLowerCase() == colorBuscado.toLocaleLowerCase()){
            contador++;
        }
    });*/

    //REDUCE

    const cantidad = items.reduce((contador, {color}) =>{

        return color.toLocaleLowerCase() == colorBuscado.toLocaleLowerCase() ? ++contador : contador;

    },0);

    console.log(`Hay ${cantidad} autos de color ${colorBuscado}`);
}


contarPorColor('rojo', autos);