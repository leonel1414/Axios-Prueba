const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved!');
    }, 2000);
});

promise
    .then((promise) => console.log(promise))
    .catch((error) => console.error(error));


