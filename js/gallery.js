const images=document.querySelectorAll(".gallery img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

const closeBtn=document.querySelector(".close");

const prev=document.getElementById("prev");

const next=document.getElementById("next");

let current=0;

function show(index){

current=index;

lightbox.style.display="flex";

lightboxImg.src=images[index].src;

}

images.forEach((img,index)=>{

img.addEventListener("click",()=>show(index));

});

closeBtn.onclick=()=>{

lightbox.style.display="none";

};

next.onclick=()=>{

current++;

if(current>=images.length) current=0;

show(current);

};

prev.onclick=()=>{

current--;

if(current<0) current=images.length-1;

show(current);

};

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

};
.lightbox{

display:none;

position:fixed;

top:0;

left:0;

width:100%;

height:100%;

background:rgba(0,0,0,.95);

justify-content:center;

align-items:center;

z-index:9999;

}

.lightbox img{

max-width:90%;

max-height:90%;

border:4px solid #d4af37;

border-radius:12px;

}

.close{

position:absolute;

top:30px;

right:40px;

font-size:50px;

cursor:pointer;

color:white;

}

#prev,#next{

position:absolute;

top:50%;

transform:translateY(-50%);

background:#d4af37;

border:none;

color:black;

font-size:32px;

padding:12px 20px;

cursor:pointer;

border-radius:50%;

}

#prev{

left:40px;

}

#next{

right:40px;

}
