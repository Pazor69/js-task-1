let ad=30;
const el1 = document.querySelector('[data-create]');
const el2 = document.querySelector('[data-destroy]');
el1.addEventListener('click',function(amount){
    
    amount=document.querySelector('[type="number"]').value;
    
if(amount<1){
    alert('Podaj liczbe boxow');
}
else{
    for(let i=0;i<amount;i++){
        let col=getRandomHexColor();
        const build = document.createElement('div');
        build.style.backgroundColor=col;
        build.style.width=ad+'px';
        build.style.height=ad+'px';
        ad+=10;
        document.getElementById('boxes').appendChild(build);
    }

}
})
function getRandomHexColor() { return `#${Math.floor(Math.random() * 16777215) .toString(16) .padStart(6, 0)}`; }
el2.addEventListener('click',function(){
    ad=30;
    document.getElementById('boxes').innerHTML="";
})