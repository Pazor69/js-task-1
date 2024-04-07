let a = document.getElementsByName("email")[0];
let b = document.getElementsByName("password")[0];
let c=0;
console.log(a);
class User{
    constructor(mail,pass){
        this.Mail=mail;
        this.Pass=pass;
    }
}


document.querySelector(".login-form").addEventListener("submit", function(event) {
    c=0;
    event.preventDefault(); 
    if(a.value.length==0){
        alert('Wypelnij pole email!');
        c++;
    }
    if(b.value.length==0){
        alert('Wypelnij pole password!');
        c++;
    }
    if(c==0){
    
    let Auser=new User(a.value,b.value);
    console.log('Mail: '+Auser.Mail);
    console.log('Pass: '+Auser.Pass);
    document.getElementsByClassName("login-form")[0].reset();
    }
});



