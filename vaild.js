let userInput = document.querySelector("[name='username']");
let passInput = document.querySelector("[name='pass']");
let emailInput = document.querySelector("[name='email']");
const regPassword =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const regEmail =
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
document.forms[0].onsubmit = function (e) {
    let validName = false;
    let validPASS = false;
    let validEmail = false;
  if (  userInput.value.length  > 2 ) {

    validName = true;
    usermessage.style.display = "none"
    userInput.classList.add("success")
  }
  else{

    usermessage.style.display = "block";
    userInput.classList.add("error")


  }

  if (regPassword.test(passInput.value)) { 
       validPASS= true;
       pswmessage.style.display = "none"
       passInput.classList.add("success")
       
  }
  else{
    pswmessage.style.display = "block"
    passInput.classList.add("error")

  }
  if (regEmail.test(emailInput.value)) { 
    let vaildEmail = true;
    emailmessage.style.display = "none"
    emailInput.classList.add("success")
    
}
else{
  emailmessage.style.display = "block"
 emailInput.classList.add("error")

}


  if(userInput.value === "admin"&&passInput.value === "marwan1234M"&&validName===true && validPASS===true){
    e.preventDefault(e);
    
    result.innerHTML="welcome"

  }

  else{
    e.preventDefault(e);
    result.innerHTML="username or wrong passward"
    
  }

}


















