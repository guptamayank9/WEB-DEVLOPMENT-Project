let input=document.getElementById("inputBox");
let buttons =document.querySelectorAll('button');

let string=""; //result store
let arr= Array.from(buttons); //sb button chahiye
arr.forEach(button =>{
   button.addEventListener('click',(e)=>{
    if(e.target.innerHTML== '='){
        string =eval(string);//mathematical give value eval inbuilt
        input.value=string;
    }else if(e.target.innerHTML=='AC'){
        string="";// alltextzer0
        input.value=string;
    }else if(e.target.innerHTML =='DEL') {
        string=string.slice(0,-1);
        input.value=string;
    } 
    else{
      string+=e.target.innerHTML; //number hongi toh add hote rhnge
      input.value=string;
    }
   
   });
});