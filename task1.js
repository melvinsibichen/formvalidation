//variable declaration and storing
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmpassword=document.getElementById('confirmpassword');
const registrationform=document.getElementById('registrationform');

//variables for error message
const username_error=document.getElementById('username_error');
const email_error=document.getElementById('email_error');
const password_error=document.getElementById('password_error');
const confirmpassword_error=document.getElementById('confirmpassword_error');


registrationform.addEventListener('submit',(e)=>
{
    //variable for email conditions
    var email_check =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;  

    if(username.value === '' || username.value == null)
    {
        e.preventDefault(); //prevents reloading
        username_error.innerHTML="Username is required";  //prints the err msg using inner html
    }
    else
    {
        username_error.innerHTML=""; 
    }

    if(!email.value.match(email_check))
    {
        e.preventDefault(); //prevents reloading
        email_error.innerHTML="Enter a valid email id";
    }
    else
    {
        email_error.innerHTML=""; 
    }

    if(password.value.length  <= 5 )
    {
        e.preventDefault(); //prevents reloading
        password_error.innerHTML="Weak password..! Must be more than 5 characters"; 
    }
    else
    {
        password_error.innerHTML=""; 
    }

    if(password!==confirmpassword)
    {
        e.preventDefault(); //prevents reloading
        confirmpassword_error.innerHTML="mismatch in password";  
    }
    else
    {
        confirmpassword_error.innerHTML=""; 
    }




})