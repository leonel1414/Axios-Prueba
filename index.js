import axios from 'axios';

//metodo GET
const axios = require('axios');
axios.get('https://fakestoreapi.com/products')
.then(response => console.log(response.data));


//metodo POST
const product = { title: 'New Product', price: 29.99 };
axios.post('https://fakestoreapi.com/products', product)
.then(response => console.log(response.data));


//metodo GET{id}
axios.get('https://fakestoreapi.com/products/1')
.then(response => console.log(response.data));


//metodo PUT
const updatedProduct = { title: 'Updated Product', price: 39.99 };
axios.put('https://fakestoreapi.com/products/1', updatedProduct)
.then(response => console.log(response.data));


//metodo DELETE
axios.delete('https://fakestoreapi.com/products/1')
.then(response => console.log(response.data));


//metodo GET con async/await

async function getProducts(){
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

getProducts();
