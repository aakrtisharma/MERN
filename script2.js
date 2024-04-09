console.log("Hello")
// const arr=[10,33,24];
// const ans=arr.map((a)=>{
//     console.log(a);
//     return 2*a;
// })
// console.log(ans)
// const ans2=arr.map(a=>Math.pow(a,2));
// console.log(ans2);
// const arr2=[10.11,22.32,34.71];
// const ans3=arr2.map(a=>parseInt(a));
// console.log(ans3);

// const arr=[10,33,42];
// const ans=arr.filter((a)=>{
//     if(a>20){
//         return true;
//     }else{
//         return false;
//     }
// })


// console.log(arr);
// console.log(ans); 

// const arr=['Delhi','Mumbai','Chennai','Pune','India','Russia','Iraq'];
// const ans=arr.filter((s)=>{
//     if(s.includes('i')||(s.includes('I'))){
//         return true;
//     }else false;
// })
// console.log(ans);
const arr=['Delhi,India','Mumbai,india','Chennai,India','Shanghai,China','Beijing,China','Texas,USA'];
// const ans=arr.filter((a)=>{
//     const ns=a.toLowerCase();
//     if(ns.includes('india')){
//         return true;
//     }else{
//         return false;
//     }
// })
//*****ALTERNATE*****/
// const ans=arr.filter((a)=>a.toLowerCase().includes('india'));
// console.log(ans);
// const ans2=arr.map((a)=>a.toUpperCase());
// console.log(ans2);


//REDUCE
// const a=[10,22,34,50];
// const ans=a.reduce((a,b,c,d)=>{
//     console.log(a,b,c,d);
//     return a+b;
// })
// console.log(ans);

const str=['ab','cd','xy','z'];
const ans=str.reduce((a,b,c,d)=>{
console.log(a,b,c,d);
return a+b;
});
console.log(ans);

