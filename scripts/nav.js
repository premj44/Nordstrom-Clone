import {nav1} from "../components/nav1.js"
document.getElementById("navbody").innerHTML = nav1()

import {navbar} from "../components/navbar.js"
document.getElementById("navbarbody").innerHTML=navbar()

let myNew=()=>{
    let x=document.getElementById("new")
    // x.style.display="block"
    x.style.display="flex"
    
    document.getElementById("women").style.display="none"
    document.getElementById("men").style.display="none"
    document.getElementById("kids").style.display="none"
    document.getElementById("swim").style.display="none"
    document.getElementById("cashmere").style.display="none"
    document.getElementById("home").style.display="none"
    document.getElementById("stories").style.display="none"
    document.getElementById("sale").style.display="none"
}
let hideNew=()=>{
   
    let x=document.getElementById("new")
    x.style.display="none"
    
}




let mywomen=()=>{
    
    document.getElementById("men").style.display="none"
    document.getElementById("new").style.display="none"
    document.getElementById("kids").style.display="none"
    document.getElementById("swim").style.display="none"
    document.getElementById("cashmere").style.display="none"
    document.getElementById("home").style.display="none"
    document.getElementById("stories").style.display="none"
    document.getElementById("sale").style.display="none"
    let x=document.getElementById("women")
    x.style.display="flex"

}
let hidewomen=()=>{
    let x=document.getElementById("women")
    x.style.display="none"
}


let mymen=()=>{
    document.getElementById("new").style.display="none"
    document.getElementById("women").style.display="none"
    document.getElementById("kids").style.display="none"
    document.getElementById("swim").style.display="none"
    document.getElementById("cashmere").style.display="none"
    document.getElementById("home").style.display="none"
    document.getElementById("stories").style.display="none"
    document.getElementById("sale").style.display="none"
    let x=document.getElementById("men")
    x.style.display="flex"

}
let hidemen=()=>{

    let x=document.getElementById("men")
    x.style.display="none"
}

let mykids=()=>{
    document.getElementById("new").style.display="none"
    document.getElementById("women").style.display="none"
    document.getElementById("men").style.display="none"
    document.getElementById("swim").style.display="none"
    document.getElementById("cashmere").style.display="none"
    document.getElementById("home").style.display="none"
    document.getElementById("stories").style.display="none"
    document.getElementById("sale").style.display="none"
    let x=document.getElementById("kids")
    x.style.display="flex"
}

let hidekids=()=>{
    let x=document.getElementById("kids")
    x.style.display="none"
}

let myswim=()=>{
    document.getElementById("new").style.display="none"
    document.getElementById("women").style.display="none"
    document.getElementById("men").style.display="none"
    document.getElementById("kids").style.display="none"
    document.getElementById("cashmere").style.display="none"
    document.getElementById("home").style.display="none"
    document.getElementById("stories").style.display="none"
    document.getElementById("sale").style.display="none"
    let x=document.getElementById("swim")
    x.style.display="flex"
}

let hideswim=()=>{
    let x=document.getElementById("swim")
    x.style.display="none"
}

let mycashmere=()=>{
    document.getElementById("new").style.display="none"
    document.getElementById("women").style.display="none"
    document.getElementById("men").style.display="none"
    document.getElementById("kids").style.display="none"
    document.getElementById("swim").style.display="none"
    document.getElementById("home").style.display="none"
    document.getElementById("stories").style.display="none"
    document.getElementById("sale").style.display="none"
    let x=document.getElementById("cashmere")
    x.style.display="flex"
}

let hidecashmere=()=>{
    let x=document.getElementById("cashmere")
    x.style.display="none"
}


let myhome=()=>{
    document.getElementById("new").style.display="none"
    document.getElementById("women").style.display="none"
    document.getElementById("men").style.display="none"
    document.getElementById("kids").style.display="none"
    document.getElementById("swim").style.display="none"
    document.getElementById("cashmere").style.display="none"
    document.getElementById("stories").style.display="none"
    document.getElementById("sale").style.display="none"
    let x=document.getElementById("home")
    x.style.display="flex"
}

let hidehome=()=>{
    let x=document.getElementById("home")
    x.style.display="none"
}



let mystories=()=>{
    document.getElementById("new").style.display="none"
    document.getElementById("women").style.display="none"
    document.getElementById("men").style.display="none"
    document.getElementById("kids").style.display="none"
    document.getElementById("swim").style.display="none"
    document.getElementById("cashmere").style.display="none"
    document.getElementById("home").style.display="none"
    document.getElementById("sale").style.display="none"
    let x=document.getElementById("stories")
    x.style.display="flex"
}

let hidestories=()=>{
    let x=document.getElementById("stories")
    x.style.display="none"
}

let mysale=()=>{
    document.getElementById("new").style.display="none"
    document.getElementById("women").style.display="none"
    document.getElementById("men").style.display="none"
    document.getElementById("kids").style.display="none"
    document.getElementById("swim").style.display="none"
    document.getElementById("cashmere").style.display="none"
    document.getElementById("home").style.display="none"
    document.getElementById("stories").style.display="none"
    let x=document.getElementById("sale")
    x.style.display="flex"
}

let hidesale=()=>{
    let x=document.getElementById("sale")
    x.style.display="none"
}

let myacc=()=>{
    document.getElementById("new").style.display="none"
    document.getElementById("women").style.display="none"
    document.getElementById("men").style.display="none"
    document.getElementById("kids").style.display="none"
    document.getElementById("swim").style.display="none"
    document.getElementById("cashmere").style.display="none"
    document.getElementById("home").style.display="none"
    document.getElementById("stories").style.display="none"
    document.getElementById("sale").style.display="none"
    x.style.display="flex"
}

let hideacc=()=>{
    let x=document.getElementById("acc")
    x.style.display="none"
}






let hidediv=()=>{
    document.getElementById("new").style.display="none"
    document.getElementById("women").style.display="none"
    document.getElementById("men").style.display="none"
    document.getElementById("kids").style.display="none"
    document.getElementById("swim").style.display="none"
    document.getElementById("cashmere").style.display="none"
    document.getElementById("home").style.display="none"
    document.getElementById("stories").style.display="none"
    document.getElementById("sale").style.display="none"
}


document.getElementById("navnew").addEventListener("mouseover",myNew);
document.getElementById("new").addEventListener("mouseleave",hideNew);

document.getElementById("navwomen").addEventListener("mouseover",mywomen);
document.getElementById("women").addEventListener("mouseleave",hidewomen);

document.getElementById("navmen").addEventListener("mouseover",mymen);
document.getElementById("men").addEventListener("mouseleave",hidemen);


document.getElementById("navkids").addEventListener("mouseover",mykids);
document.getElementById("kids").addEventListener("mouseleave",hidekids);

document.getElementById("navswim").addEventListener("mouseover",myswim);
document.getElementById("swim").addEventListener("mouseleave",hideswim);

document.getElementById("navcashmere").addEventListener("mouseover",mycashmere);
document.getElementById("cashmere").addEventListener("mouseleave",hidecashmere);


document.getElementById("navhome").addEventListener("mouseover",myhome);
document.getElementById("home").addEventListener("mouseleave",hidehome);


document.getElementById("navstories").addEventListener("mouseover",mystories);
document.getElementById("stories").addEventListener("mouseleave",hidestories);

document.getElementById("navsale").addEventListener("mouseover",mysale);
document.getElementById("sale").addEventListener("mouseleave",hidesale);
