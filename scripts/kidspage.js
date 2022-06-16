import { kids } from "../components/men.js";

let maindive=document.querySelector(".data")

let men=kids();

// import{sorting} from "./components/sorting.js"
// document.getElementById("featured").onchange=()=>{sorting()}

//------hover on btn--->
let quickbtn=(btn)=>{
    
    btn.style.display="block"
}
let btnmove=(btn)=>{

    btn.style.display="none"
}


//--------set data in local storege------>


let data=JSON.parse(localStorage.getItem("cart"))||[];
let setdata=(ele)=>{
  data.push(ele)
//   alert("Item Added to Cart")
    localStorage.setItem("cart",JSON.stringify(data))
    let x=JSON.parse(localStorage.getItem("cart"))||[]
    if(x.length==1){
        window.location.reload() 
    }
   
    document.getElementById("cartno").innerText=x.length;
}


let displayData=(men)=>{
maindive.innerHTML=null;
men.forEach((ele,btn)=>{
    

    let div1=document.createElement("div")
    div1.setAttribute("id","div1")
   

    let img=document.createElement("img")
    img.src=ele.img;
    img.setAttribute("class","csimg")
    

    let span=document.createElement("span")
    span.setAttribute("class","span")
    span.innerHTML="<span>&#9825</span>"

    btn = document.createElement("button")
    btn.setAttribute("id","csbtn")
    btn.innerText="QUICK SHOP"

    btn.addEventListener("click",()=>{
        setdata(ele)
    })

    div1.addEventListener("mouseover",()=>{
        quickbtn(btn)
    })
    div1.addEventListener("mouseout",()=>{
        btnmove(btn)
    })


    let  h5=document.createElement("h5")
    h5.innerText="NEW COLOR" 

    let p1=document.createElement("p")
    p1.innerText=ele.name;

    let h3=document.createElement("h3")
    h3.innerText="INR "+ele.price;

    let p2=document.createElement("p")
    p2.setAttribute("id","p")
    p2.innerText="2 FOR 30% OFF,3+ FOR 40% OFF"

    let h4 =document.createElement("h4")
    h4.innerText="Classic, Slim, Tall";

    let div2=document.createElement("div")

    div2.setAttribute("id","color")
    let img1=document.createElement("img")
    let img2=document.createElement("img")
    let img3=document.createElement("img")
    let img4=document.createElement("img")
    let img5=document.createElement("img")
    let img6=document.createElement("img")
    let img7=document.createElement("img")
    let img8=document.createElement("img")
    let img9=document.createElement("img")
    let img10=document.createElement("img")

img1.src="https://www.jcrew.com/s7-img-facade/J1785_YL5858_sw?$pdp_sw20$"
img2.src="https://www.jcrew.com/s7-img-facade/J1785_YL5427_sw?$pdp_sw20$"
img3.src="https://www.jcrew.com/s7-img-facade/J1785_YL5377_sw?$pdp_sw20$"
img4.src="https://www.jcrew.com/s7-img-facade/J1785_WT0002_sw?$pdp_sw20$"
img5.src="https://www.jcrew.com/s7-img-facade/J1785_WQ0018_sw?$pdp_sw20$"
img6.src="https://www.jcrew.com/s7-img-facade/J1785_RD5297_sw?$pdp_sw20$"
img7.src="https://www.jcrew.com/s7-img-facade/J1785_PK5669_sw?$pdp_sw20$"
img8.src="https://www.jcrew.com/s7-img-facade/J1785_BL8354_sw?$pdp_sw20$"
img9.src="https://www.jcrew.com/s7-img-facade/J1785_GR1521_sw?$pdp_sw20$"
img10.src="https://www.jcrew.com/s7-img-facade/J1785_BL5795_sw?$pdp_sw20$"

div2.append(img1,img2,img3,img4,img5,img6,img7,img8,img9,img10)

div1.append(img,span,btn,h5,p1,h3,p2,h4,div2)

maindive.append(div1)
   
})
}
window.addEventListener("load",function(){
    displayData(men);
  });

 // ------------sorting--------->

let sorting=()=>{
let select=document.getElementById("featured").value;
// console.log(select)
if(select==="LH"){
    men.sort((a,b)=>(+a.price)-(+b.price))
    // console.log(men)
    displayData(men)
}
if(select==="HL"){
    men.sort((a,b)=>(+b.price)-(+a.price))
    displayData(men)
}

}
document.getElementById("featured").onchange=()=>{sorting()}


