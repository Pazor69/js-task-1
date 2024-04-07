function getRandomHexColor() { 
    return `#${Math.floor(Math.random() * 16777215) .toString(16) .padStart(6, 0)}`; }
   document.getElementsByClassName("change-color")[0].addEventListener('click',function(){
    let a= getRandomHexColor();
    document.getElementsByClassName('color')[0].innerHTML=a;
    document.body.style.backgroundColor=a;
   })