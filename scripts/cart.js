// table

//   Data fetching---------------------------------------------------------------------------------->

var cartData = JSON.parse(localStorage.getItem("cart"))||[];
console.log(cartData);

// wish 
var NewArriv = JSON.parse(localStorage.getItem("wish")) || [];  //wish
console.log(NewArriv) ;

// Save for Later

var saveL = JSON.parse(localStorage.getItem("savelater")) || [];
console.log(saveL);

// var saveL = JSON.parse(localStorage.getItem("savelater")) || [];
// console.log(saveL);

//   Calculation---------------------------------------------------------------------------------->

var total = cartData.reduce(function (sum, elem, index, arr) {
return sum + Number(elem.price);
}, 0);

var length = cartData.length; 
console.log(length);

var length2 =NewArriv.length
console.log(total);


var totaldis = document.querySelector(".priceshow").innerText = ` ${total}`;
var totaldis2 = document.querySelector(".priceshow2").innerText = ` ${total}`;

// -----------------coupon ------------------------------------------>

var  fixed = +total * 70/100;
console.log("fixed",fixed);
console.log(total);
function valid(){ 
event.preventDefault()
let x = document.getElementById("Couponbox").value;

if (x ="masai30"){
  if(total>fixed){
    total=Math.floor(total*(70/100));
    document.querySelector(".priceshow").innerText=total;
    document.querySelector(".priceshow2").innerText=total;
  }
  console.log(total);
}
}

document.getElementById("couponbtn").addEventListener("click", valid);
// window.location.reload();

//   js function------------------------------------------------------------------------------------------->
count =1 ;
counqt=1;

console.log(counqt)
cartData.map(function (elem, index) {
console.log(elem.image_url)
var box = document.createElement("tr");

var no = document.createElement("td");
    no.innerText= count++ ;

var items1 = document.createElement("div")
    items1.setAttribute("id","conitem")

var img = document.createElement("img");
    img.setAttribute("id","Fimg")
    img.src = elem.img;
    img.style.marginRight="10%"

var name = document.createElement("p");
    name.setAttribute("id","itemname")
    name.textContent = elem.name;


var qtyn = document.createElement("td")
qtyn.setAttribute("class","qtynsl")
var subdiv= document.createElement("div")
    subdiv.setAttribute("id","qtydiv")


//-------- minus- start here------->

var btnmins  = document.createElement("button")
    btnmins.setAttribute("id","minscount")
    btnmins.innerText= "−"


var displaycount = document.createElement("div")
    displaycount.setAttribute("class","displayMe")

    btnmins.addEventListener("click",function(){ 
    displaycount.innerText= 1+counqt--;

});

var btnplus  =document.createElement("button")
    btnplus.setAttribute("id","pluscount")
    btnplus.innerText= "+"
    btnplus.addEventListener("click",function(){

    displaycount.innerText= 1+counqt++;
});


// ---------minus endshere-------------------------->

var btnsaveLater = document.createElement("button");
   btnsaveLater.setAttribute("class","saveltr")
   btnsaveLater.innerText="Save for Later"
   btnsaveLater.addEventListener("click",function (){
                 addtoSavelater(elem);
                 removeItem(elem, index);
   });
var bottomline = document.createElement("div")
    bottomline.setAttribute("class","pink6")

var rbtn = document.createElement("button");
    rbtn.innerText = "Remove";
    rbtn.setAttribute("id","Remove-1")

    rbtn.addEventListener("click", function () {
        removeItem(elem, index);
 });

var price = document.createElement("td");
    price.innerText = elem.price;
    price.setAttribute("id","net") ;
    
    
var grosstotal = document.createElement("td");
    grosstotal.setAttribute("id","gross") ;
    grosstotal.innerText= "INR: "+ elem.price;
    
    console.log(grosstotal,displaycount.innerText) 
    
    subdiv.append(btnmins,displaycount,btnplus)
    qtyn.append(btnsaveLater,bottomline,rbtn)
    items1.append(img,name)
    box.append(no,items1,qtyn,grosstotal);
    document.querySelector("#body1").append(box);
});

//--------   Remove function & data added for next page-------------------------------------------------------------->

function removeItem(elem, index) {
    count-- ;
    console.log(elem, index);
    cartData.splice(index, 1);
    console.log(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData));
    window.location.reload();
  
}


let savearr =JSON.parse(localStorage.getItem("saveL"))  || [];

function addtoSavelater(elem){
  savearr.push(elem);
  localStorage.setItem("saveL",JSON.stringify(savearr));
  console.log(elem);
}

let later = JSON.parse(localStorage.getItem("saveL"));
later.map(function(elem,index){
  let box = document.createElement("div");
  box.setAttribute("class","boxlater")

    let img = document.createElement("img");
        img.setAttribute("id","Saveltrimg") ;
        img.src = elem.img;

    let name = document.createElement("p");
        name.setAttribute("id","Saveltrname") ;
        name.textContent = elem.name;
        name.style.fontSize="18px"
        // name.style.fontWeight="lighter"

   let price = document.createElement("p");
       price.setAttribute("id","Saveltrprice") ;
       price.innerText = "INR - "+elem.price;

       box.append(img, name, price);
       document.querySelector("#Savelater").append(box);
})

   