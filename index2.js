// const figlet=require('figlet');
// figlet('Hello!!',(err,data)=>{
//     console.log(data);
// });
 

//Async await
// console.log('start');
// async function getApi(){
//     console.log('api calling');
//     const pr=await fetch('https://api.github.com/users/deepak111');
//     console.log('making json....')
//      const data= await pr.json();
//      console.log('::: fetched data :::');
// }
// getApi(); 
console.log('start');
async function callApi(){
  const pr=new Promise((res,rej)=>{
    console.log('promise 1.....');
    setTimeOut(()=>{
      console.log('timeout 1.....');
    },10000)
  })
  console.log('promise completed');

}
callApi();