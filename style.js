// let a=new String("hello");
// let b='hello';
// if(a==b){
//     console.log("yes");
//     }else {
//         console.log("no");
//         }
// let obj={
//     "name":"Ajay",
//     "lastName":"singh"
// };
// console.log(obj);
// document.write(JSON.stringify(obj));
// obj={
//     "name":"aakrti"
// }
//
// let arr=[1,2,3,4];
// arr=[2,3,4];
// console.log(arr);
// const arr=[1,2,3];
// arr.pop();
// console.log(typeof(arr)); 
// let obj1={
//     "name":"aakrti",
//     2:"sharma",
// }
// obj1[2]="abc";
// console.log(obj1)
// const obj={
//     "name":"aakrti",
//     "lastName":"shamra"
// }
// const arr=[1,2,3];
// arr[0]=20;
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));

//checkIfObject([1,2,3,4])
// let arr=[1,2,3,4];
// let obj={
//     "name":"aakrti",
// };
// function fun(x){
//     if(Array.isArray(x)){
//         console.log("Not object");
//     }else if(typeof(x)=="object"){
//         console.log("object");
//     }else{
//         console.log("Not Object");
//     }
// }
// //checkIfObject({name:"aakrti"});
// fun(obj);

// fun(arr);
// const arr=[1,3,4];
// let obj={
//   "name":"aakrti",
//   "age":12,
//   1:"one"
// };
//iteration in array use for of loop
//iterable+key(array)
// for(let i of arr){
//   console.log(i);
// }
// //no iteration in object use for in 
// //only values not key (both)gives array index only
// for(let j in obj){
//  console.log(j);
// }
// for(let k in arr){
//     console.log(k)
// }
//   console.dir(window.document) 
//   console.dir(console)
//   console.log(window.document)
//   console.log(console)
// const res=document.getElementsByTagName('h3');
// const res=document.getElementById("ht1")
// console.log(res);
// const res=document.querySelector('h3.c1').innerHTML="Welcome to KIET"
// const parth=document.getElementsByTagName('div');
// parth[0].innerHTML="<h2>hello world</h2>";
// // console.log(res)
// const ne=document.createElement("h3")
// ne.innerText="Dynamic text"
// console.log(ne)
// document.body.appendChild(ne)
// const firstdiv=document.getElementsByTagName("div");
// firstdiv[0].appendChild(ne)
const rel = document.getElementsByTagName('div');
const del=document.getElementsByTagName("h2");
del[0].remove()