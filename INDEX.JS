const promise = new Promise((resolve, reject) => {
    setTimeout(() => { 
        resolve("Udało się");
    }, 5000);
});

promise.then(result => {
    console.log(result)
});

const multiplyAsync = (x,y)=> new Promise((resolve, reject) => {
    if (typeof x == 'number' && typeof y =='number')
        resolve(x*y); 
        reject("brak liczby"); 
 
})


multiplyAsync(6, 8).then(console.log);
multiplyAsync("kasia", "maja").then(console.log);