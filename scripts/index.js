let arr=
[
"https://n.nordstrommedia.com/id/ae19312f-ca77-4db9-94ee-658516ba458c.jpeg?h=622&w=1608",
"https://n.nordstrommedia.com/id/5a88520e-8ee7-4cf0-829d-3d833b0a9af2.jpeg?h=622&w=1608",
"https://n.nordstrommedia.com/id/d2fb0a28-fce0-4356-a893-885aaff4c62b.jpeg?h=622&w=1608",
"https://n.nordstrommedia.com/id/30f4a509-58fe-483f-b861-2fef342c6441.jpeg?h=622&w=1608",
]
let i=0;
let x=document.getElementById("land8")
let id=setInterval(() => {
    if(i==arr.length){
        i=0;
    }
    x.style.backgroundImage=`url(${arr[i]})`
    i++
}, 2000);


let show1=()=>{
    document.getElementById("spr61").style.display="block"
}

let hide1=()=>{
    document.getElementById("spr61").style.display="none"
   
}

let show2=()=>{
    document.getElementById("spr62").style.display="block"
}

let hide2=()=>{
    document.getElementById("spr62").style.display="none"
}

let show3=()=>{
    document.getElementById("spr63").style.display="block"
}

let hide3=()=>{
    document.getElementById("spr63").style.display="none"
}

let show4=()=>{
    document.getElementById("spr64").style.display="block"
}

let hide4=()=>{
    document.getElementById("spr64").style.display="none"
}


document.getElementById("pr6img1").addEventListener("mouseover",show1)
document.getElementById("pr6img1").addEventListener("mouseleave",hide1)

document.getElementById("pr6img2").addEventListener("mouseover",show2)
document.getElementById("pr6img2").addEventListener("mouseleave",hide2)

document.getElementById("pr6img3").addEventListener("mouseover",show3)
document.getElementById("pr6img3").addEventListener("mouseleave",hide3)

document.getElementById("pr6img4").addEventListener("mouseover",show4)
document.getElementById("pr6img4").addEventListener("mouseleave",hide4)




let goright=()=>{
    document.getElementById("pr6img1").style.backgroundImage="url('https://cdn.dashhudson.com/media/640/1639450121.23927782505.jpeg')"

    document.getElementById("pr6img2").style.backgroundImage="url('https://cdn.dashhudson.com/media/640/1638985643.81467653793.jpeg')"
    
    document.getElementById("pr6img3").style.backgroundImage="url('https://cdn.dashhudson.com/media/640/1633576910.42796190538.jpeg')"
    
    document.getElementById("pr6img4").style.backgroundImage="url('https://cdn.dashhudson.com/media/640/1634145375.908124478742.jpeg')"
}
document.getElementById("sign2").addEventListener("click", goright)


let goleft=()=>{
    document.getElementById("pr6img1").style.backgroundImage="url('https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjQ5Njk0MDExLjAyMDcxNzE3Mzk2Mi5qcGVn.jpg?w=640&h=640&fit=cover')"

    document.getElementById("pr6img2").style.backgroundImage="url('https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjQ5OTcyMzcxLjgwODIwOTczMTY2OS5qcGVn.jpg?w=640&h=640&fit=cover')"
    
    document.getElementById("pr6img3").style.backgroundImage="url('https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjQ5MTc2MTQ4LjEzMjExMDg0MzExNS5qcGVn.jpg?w=640&h=640&fit=cover')"

    document.getElementById("pr6img4").style.backgroundImage="url('https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjUzNDMxODExLjg2OTAxNDU3MzU1LmpwZWc=.jpg?w=640&h=640&fit=cover')"
   
}
document.getElementById("sign1").addEventListener("click", goleft)
