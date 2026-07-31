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
