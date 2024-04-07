const a=document.getElementById('name-input');

a.addEventListener('input', function () {
    if(a.value<1){
        document.getElementById('name-output').innerHTML='Anonymous';
    }else
    document.getElementById('name-output').innerHTML=a.value;
});