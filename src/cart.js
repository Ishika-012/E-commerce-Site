//CART CODE


let basket=JSON.parse(localStorage.getItem("store")) || [];

let shoppingCart = document.querySelector("#shopping-cart");
let bill = document.querySelector("#bill");
let order = document.querySelector("#order");

let calculation = () => {
  let count = document.querySelector("#count");
  count.textContent = basket.map((x) => x.item).reduce((x,y)=>x+y,0);
}
calculation()


let generateItem = () =>{
  console.log("hello");
  if(basket.length !== 0){
    shoppingCart.innerHTML = basket.map((x) => {
    let {id,item} = x;
    let search = product.find((y) => y.id === id) || [];
    return `
    <div class="productData">
     <img src="${search.img}" height="100px" class="pro-img">
    <div id="grpData"><p class="br">${search.Name}</p> 
     <div class="quant">${search.quant}</div>
     <div class="add">
        <span class="price"><i class="fa-solid fa-indian-rupee-sign" style="color: #0a0a0a;" id="rupee"></i>${item * search.price}</span>
    </div></div>
    <span class="btn-cart">
              <button  onclick="decrement(${id})" style="background-color:#90f111; border:none;width:1rem;font-size:12pt;transform:translateY(-0.4rem);">_</button>
              <span id=${id} class="num">${item}</span>
              <button  onclick="increment(${id})" style="background-color:#90f111; border:none;width:1rem;font-size:12pt;">+</button>
            </span>
    </div>
    `;
   })
   .join("");
  }
  else{
     shoppingCart.innerHTML=`<img src="image2/cart.png" id="cart-img">
     <h2 id="heading">You don't have any items in your cart</h2>
     <a href="home.html"><button id="shop-btn">Start Shopping</button>
     `
    
  }
   billGenerate();

};
 let billGenerate = () => {
  let amount;
  let DeliverPrice= Math.floor(Math.random()*(5-2+1)+1) * 8; //Delivery price per km
  if(basket.length !== 0){
    amount = basket.map((x)=>{
      let {id,item} = x;
      let search = product.find((y) => y.id === id) || [];
      return item * search.price;
    }).reduce((a,b) => a+b);
  
    bill.innerHTML= `
    <div class="receipt">
    <h3>Bill Details</h3>
    <div id="amount">
    <div>
     <p>Items Total</p>
     <p>Delivery Charge<p>
     <p>Handeling Charge</p>
     <p class="total"><b>TOTAL</b></p>
    </div>
    <div>
     <p><i class="fa-solid fa-indian-rupee-sign" style="color: #0a0a0a;" id="rupee"></i>${amount}</p>

     <p>${amount>=150 ?`<span id='price'><i class="fa-solid fa-indian-rupee-sign change" style="color: rgb(60, 59, 59);" id="rupee"></i>${DeliverPrice}</span> <span id="free">FREE</span>`:DeliverPrice}</p>

     <p><i class="fa-solid fa-indian-rupee-sign" style="color: #0a0a0a;" id="rupee"></i>3</p>

     <p class="total"><b><i class="fa-solid fa-indian-rupee-sign" style="color: #0a0a0a;" id="rupee"></i>${amount>=150? amount+3:amount+DeliverPrice+3}</b></p>
     </div>
    </div>
    `
    order.innerHTML = `<a href="payment.html"><button class="buy">Order Now</button></a>`
 }
 else{
  bill.innerHTML="";
  order.innerHTML="";
 }
}

 

 //increment and decrement
let increment = (id)=> {
  const unique=id;
  let search = basket.find( x => x.id === unique.id);
  if(!search){
  basket.push({
  id:unique.id,
  item: 1
  })
  }
  else{
  search.item +=1;
  }
  update(unique.id);
  generateItem();
  localStorage.setItem("store", JSON.stringify(basket))
  
 
}

let decrement = (id) => {
const unique = id;
  let search = basket.find( x => x.id === unique.id) ;
  if(search===undefined) return;
  else if(search.item === 0) return;
  else{
  search.item -=1;
  }
  // if(search.item === 0){
  // change(index,id);
  // return
  // } 

  update(unique.id);  
  basket=basket.filter((x)=>x.item!==0);
  generateItem();
 localStorage.setItem("store", JSON.stringify(basket));
}

let update = (id) => {
  let search = basket.find( x => x.id === id);
  document.getElementById(id).innerText = search.item;
  calculation();
}

//Calling generateitem function
generateItem();

