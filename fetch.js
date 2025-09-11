//EJEMPLO DE USO DE FETCH PARA OBTENER DATOS DE UNA API GET
fetch('https://fakestoreapi.com/products')
.then((response) => response.json())
.then((data => console.log(data)))
.catch((error) => console.error('Error fetching products:', error));


//metodo POST
const product = { title: 'New Product', price: 29.99 };
fetch('https://fakestoreapi.com/products', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(product)
})
.then(response => response.json())
.then(data => console.log(data));


//metodo GET{id}
fetch('https://fakestoreapi.com/products/1')
.then((response) => response.json())
.then((data => console.log(data)))
.catch((error) => console.error('Error fetching products:', error));


//metodo PUT
const products = { title: 'Updated Product', price: 39.99 };
fetch('https://fakestoreapi.com/products/1', {
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(products)
})
.then(response => response.json())
.then(data => console.log(data));


//metodo DELETE
fetch('https://fakestoreapi.com/products/1', {
method: 'DELETE'
})
.then(response => response.json())
.then(data => console.log(data));


//metodo GET con async/await
async function getProducts(){
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

getProducts();