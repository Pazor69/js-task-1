let counterValue=0;

const el1 = document.querySelector('[data-action="decrement"]');

const el2 = document.querySelector('[data-action="increment"]');

const val=document.getElementById('value');

el1.addEventListener("click",function(){
    counterValue--;
    val.innerHTML=counterValue;
})
el2.addEventListener("click",function(){
    counterValue++;
    val.innerHTML=counterValue;
})