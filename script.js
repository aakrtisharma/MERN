// const res=
//     document.querySelector("div");
// console.log(res);
// res.remove();
// const res=document.querySelector('div');
// const c=document.querySelector('p:nth-of-type(2)');
// res.removeChild(c); 

// EVENTS 
// function getinfo(){
//     // console.log("button click")
//    const d= document.querySelector('div')
//    d.prepend("my name is Aakrti");
    //   d.append("my name is aakrti");
//}
function getinfo(e){
    console.log(e);
    e.target.setAttribute('style','color:white')//direct change in DOM;
    e.target.style.backgroundColor='blue';
    // e.target.style.color="blue";
   

}