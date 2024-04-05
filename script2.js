const firstNameChange = (e)=>{
    // console.log(e.target.value);
   const val=e.target.value;
   if(val.length>3){
    console.log('correct');
   }
}
 function  submitForm(e){
    e.preventDefault();//prevent data 
   const t=e.target;
//    console.log(t);
   const res={
     hobbies:[],
   };
    for(let i=0;i<t.length;i++){
        // console.log(t[i].value,t[i].type)
      const typ=t[i].type;
      if(typ!='submit'){
        const val=t[i].value;
        const nm=t[i].name;
        // console.log(nm); lables
      if(typ=='checkbox'&&t[i].checked){
        res.hobbies.push(val);
      }
     if(typ!="checkbox"){
        res[nm]=val;
     }
     }
    }
    console.log(res);
}  