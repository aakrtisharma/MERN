// console.log("start");
// const req=fetch("https://api.github.com/users/deepak3440");
// console.log(req);
// req.then(()=>console.log('fetched'));//when fulfill
// console.log('end');

console.log('start');
// const req=fetch('https://dummyjson.com/products/1')
// const res=req.then(res=>res.json());
// res.then((data)=>console.log(data));
// .then(res => console.log(res))
// .then(json => console.log(json))
console.log('end');
//alternate
const req=fetch('https://dummyjson.com/products/1').then(res=>res.json()).then((data)=>console.log(data));