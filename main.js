const cocabtn1= document.querySelector('.coca');
const cocabtn2= document.querySelector('.coca-logo');
const spritebtn1= document.querySelector('.sprite');
const spritebtn2= document.querySelector('.sprite-logo');
const upbtn1= document.querySelector('.up');
const upbtn2= document.querySelector('.up-logo');
   
function coca(){
    cocabtn1.style.display='block';
    spritebtn1.style.display='none';
    upbtn1.style.display='none';
    
    cocabtn2.style.display='block';
    spritebtn2.style.display='none';
    upbtn2.style.display='none';
}
function sprite(){
    cocabtn1.style.display='none';
    spritebtn1.style.display='block';
    upbtn1.style.display='none';
    cocabtn2.style.display='none';
    spritebtn2.style.display='block';
    upbtn2.style.display='none';
}
function up(){
    cocabtn1.style.display='none';
    spritebtn1.style.display='none';
    upbtn1.style.display='block';
    cocabtn2.style.display='none';
    spritebtn2.style.display='none';
    upbtn2.style.display='block';
}


