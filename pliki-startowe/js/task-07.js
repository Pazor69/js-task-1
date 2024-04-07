const a=document.getElementById('font-size-control');
const val=a.value;

a.addEventListener('input',function(){
    document.getElementById('text').style.fontSize=a.value+'px';
    
})