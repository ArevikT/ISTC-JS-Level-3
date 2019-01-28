signUP.addEventListener('click', signUp);
signIN.addEventListener('click', signIn);

function signUp(){
    form1.style.justifyContent = "space-around";
    form1.style.display = 'block';
    form2.style.display = 'none';
}
function signIn(){
    form2.style.display = 'block';
    form1.style.display = 'none';
}
document.getElementById("name").addEventListener("change",myFunctionName);
document.getElementById("surname").addEventListener("change",myFunctionSurname);
document.getElementById("email").addEventListener("change",myFunctionEmail);
document.getElementById("password").addEventListener("change",myFunctionPassword);
document.getElementById("confirmPassword").addEventListener("change",myFunctionConfirmPassword);
document.getElementById("username").addEventListener("change",myFunctionUsername);
document.getElementById("pass").addEventListener("change",myFunctionPass);

function myFunctionName(){
    let regexName = /^[a-zA-Z]+$/;
    let name = document.getElementById("name").value;
        if( regexName.test(name) === false ){
        document.getElementById("errorName").style.display = "block"
        document.getElementById("errorName").innerHTML = "Must be in letters only";
         return  document.getElementById("name").style.borderColor= "red";
    }else{
        document.getElementById("errorName").style.display = "none"
        return document.getElementById("name").style.borderColor= "green";
    }
}

function myFunctionSurname(){
    let regexName = /^[a-zA-Z]+$/;
    let surname = document.getElementById("surname").value;
       if( regexName.test(surname) === false ){
        document.getElementById("errorSurname").style.display = "block"
        document.getElementById("errorSurname").innerHTML = "Must be in letters only";
         return  document.getElementById("surname").style.borderColor= "red";
    }else{
        document.getElementById("errorSurname").style.display = "none"
        return document.getElementById("surname").style.borderColor= "green";
    }
}

function myFunctionEmail(){
    let regexEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    let email = document.getElementById("email").value;
     if( regexEmail.test(email) === false ){
        document.getElementById("errorEmail").style.display = "block"
        document.getElementById("errorEmail").innerHTML =  "Sample characters@characters.domain";
         return  document.getElementById("email").style.borderColor= "red";
     }else{
        document.getElementById("errorEmail").style.display = "none"
        return document.getElementById("email").style.borderColor= "green";
    }
}

function myFunctionPassword(){
    let regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    let password = document.getElementById("password").value;
     if( regexPassword.test(password) === false ){
        document.getElementById("errorPassword").style.display = "block"
        document.getElementById("errorPassword").innerHTML = "Your Password Should Contain At Least 8 Characters, 1 Number, 1 Upper And 1 Lower";
         return  document.getElementById("password").style.borderColor= "red";
    }else{
        document.getElementById("errorPassword").style.display = "none"
        return document.getElementById("password").style.borderColor= "green";
    }
}
function myFunctionConfirmPassword(){
  let confirmPassword = document.getElementById("confirmPassword").value;
  let password = document.getElementById("password").value;
   if( confirmPassword !== password){
    document.getElementById("errorConfirmPassword").style.display = "block"
    document.getElementById("errorConfirmPassword").innerHTML = "Does not match the password";
     return  document.getElementById("confirmPassword").style.borderColor= "red";
  }else{
     document.getElementById("errorConfirmPassword").style.display = "none"
    return document.getElementById("confirmPassword").style.borderColor= "green";
  }
}

function myFunctionUsername(){
    let regexName = /^[a-zA-Z]+$/;
    let username = document.getElementById("username").value;
    if( regexName.test(username) === false ){
        document.getElementById("errorUsername").style.display = "block"
        document.getElementById("errorUsername").innerHTML = "Must be in letters only";
          return 
        document.getElementById("username").style.borderColor= "red";
    }else{
        document.getElementById("errorUsername").style.display = "none"
        return document.getElementById("username").style.borderColor= "green";
    }
   
}

function myFunctionPass(){
    let regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    let pass = document.getElementById("pass").value;
     if( regexPassword.test(pass) === false ){
        document.getElementById("errorPass").style.display = "block"
        document.getElementById("errorPass").innerHTML = "Your Password Should Contain At Least 8 Characters, 1 Number, 1 Upper And 1 Lower";
         return  document.getElementById("pass").style.borderColor= "red";
    }else{
        document.getElementById("errorPass").style.display = "none"
        return document.getElementById("pass").style.borderColor= "green";
    }
}

createAccount.addEventListener("click", createACCOUNT);
function createACCOUNT(){
    let objSignUp = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        email: document.getElementById("email").value, 
        password: document.getElementById("password").value,
        confirmPassword: document.getElementById("confirmPassword").value
      };
      console.log(objSignUp);

      fetch('http://rest.learncode.academy/api/learncode/friends', {
        method: "POST",
        headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(objSignUp),
   })
   .then(response => response.json()) // response.json() returns a promise
   .then((response) => {
        
        document.getElementById("demo").innerHTML +="Nname:"+ " " + document.getElementById("name").value + "<br>";
        document.getElementById("demo").innerHTML += "Surname:" + " " + document.getElementById("surname").value + "<br>";
        document.getElementById("demo").innerHTML += "Email:" + " " + document.getElementById("email").value;
          
       }) 
   

}

   logIn.addEventListener("click", logIN);
function logIN(){
        let objSignIn = {
            username: document.getElementById("username").value,
            password: document.getElementById("pass").value   
      };
      console.log(objSignIn);
    // if(document.getElementById("pass").style.borderColor= "green" && document.getElementById("pass").style.borderColor= "green" ) {
      fetch('http://rest.learncode.academy/api/learncode/friends', {
        method: "POST",
        headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(objSignIn),
   })
   .then(response => response.json()) // response.json() returns a promise
   .then((response) => {
        
        document.getElementById("demo").innerHTML +="Username:"+ " " + document.getElementById("username").value + "<br>";
        document.getElementById("demo").innerHTML += "Password:" + " " + document.getElementById("pass").value;
       
             
     console.log("You saved this item", response); //returns the new item along with its ID
   }) 
 
}


