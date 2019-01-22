
  function myFunction(){
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password");

    var regexName = /^[a-zA-Z]+$/;
    var regexEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    var regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if ( regexName.test(name) === false || name = "" ){

        document.getElementById("name").style.borderColor= "red";
        document.getElementById("errorName").innerHTML = "Is invalid";
        
         }
    if ( regexName.test(surname) === false || surname = "" ){

      document.getElementById("surname").style.borderColor= "red";
      document.getElementById("errorSurname").innerHTML = "Is invalid";
      
        }
    if ( regexEmail.test(email) === false || email = "" ){

      document.getElementById("email").style.borderColor= "red";
      document.getElementById("errorEmail").innerHTML = "Sample characters@characters.domain";
        }
    if ( regexPassword.test(password) === false || password = "" ){

      document.getElementById("password").style.borderColor= "red";
      document.getElementById("errorPassword").innerHTML = "Your Password Should Contain At Least 8 Characters, 1 Number, 1 Upper And 1 Lower";
         }
     if( confirm_password !== password || confirm_password = "" ) {

      document.getElementById("password").style.borderColor= "red";
      document.getElementById("errorConfirmPassword").innerHTML = "Is invalid";
         }

    return false;
    
}