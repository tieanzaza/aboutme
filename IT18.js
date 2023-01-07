const Ls = document.getElementById('Ls'); 
const Ls2 = document.getElementById('Ls2'); 
const Ls3 = document.getElementById('Ls3');  
const box1 = document.getElementById('box1'); 
const box2 = document.getElementById('box2'); 
const box3 = document.getElementById("box3");  



function menuClick() {
    menu.style.display = "none";
    header.style.backgroundColor = "#000000)";
    header.style.border = "2px solid white";
}

Ls.addEventListener('click', menuClick); 
Ls2.addEventListener('click', menuClick); 
Ls3.addEventListener('click', menuClick);  


Ls.addEventListener('click', () => { 
    box1.scrollIntoView(); })  
Ls2.addEventListener('click', () => {     
    box2.scrollIntoView(); })
Ls3.addEventListener('click', () => {     
    box3.scrollIntoView(); })





    
const profile = document.getElementById('profile');
const button1 = document.getElementById('button1');

button1.addEventListener('click' ,()=> {
    profile.scrollIntoView();
})
const preview = document.getElementById('preview');
const button2 = document.getElementById('button2');

button2.addEventListener('click',()=>{
    preview.scrollIntoView();
}) 


const menu = document.getElementById('menu');
const menuM = document.getElementById('openNav');

menuM.addEventListener('click',()=>{
    if(menu.style.display === "none")
    {
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }
}) 

const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');

menu2.addEventListener('click',()=>{
    preview.scrollIntoView();
}) 

menu1.addEventListener('click' ,()=> {
    profile.scrollIntoView();
})

menu2.addEventListener('click',()=>{
    menu.style.display = "none";
}) 

menu1.addEventListener('click' ,()=> {
    menu.style.display = "none";
})