const a=document.getElementById('validation-input');
const ck=a.getAttribute('data-length')*1;


a.addEventListener('blur',function(){

    console.log(a.value.length);
    if(a.value.length==6){
        a.classList.remove("invalid");
        a.classList.add("valid");
    }
    else{
        a.classList.remove("valid");
        a.classList.add("invalid");
    }
    })
