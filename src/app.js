// log in page
let login=document.querySelector(".login");
 let frame=document.querySelector(".frame");
 let overlay=document.querySelector(".overlay");

 const display = () =>{
   overlay.classList.remove("hide");
   frame.classList.remove("hide"); 
   document.body.style.overflow = 'hidden';

  
}

 login.addEventListener("click",display);
    
 overlay.addEventListener("click",() => {
     overlay.classList.add("hide");
     frame.classList.add("hide");
     document.body.style.overflow = 'auto';
 });  

 //RAPIFY LOGO
 let n = document.querySelector("#n1");
 n.innerHTML = n.innerHTML.replace('y','<span style="color:green;">y</span>');
 n.innerHTML = n.innerHTML.replace('F','<span style="color:green;">F</span>');

 
 