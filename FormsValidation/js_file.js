
  function myFunction(){
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    var regexName = /^[a-zA-Z]+$/;
    var regexEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    var regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if ( regexName.test(name) === false ){

        document.getElementById("name").style.borderColor= "red";
        document.getElementById("errorName").innerHTML = "Is invalid";
        
         }
    if ( regexName.test(surname) === false ){

      document.getElementById("surname").style.borderColor= "red";
      document.getElementById("errorSurname").innerHTML = "Is invalid";
      
        }
    if ( regexEmail.test(email) === false ){

      document.getElementById("email").style.borderColor= "red";
      document.getElementById("errorEmail").innerHTML = "Sample characters@characters.domain";
        }
    if ( regexPassword.test(password) === false ){

      document.getElementById("password").style.borderColor= "red";
      document.getElementById("errorPassword").innerHTML = "Your Password Should Contain At Least 8 Characters, 1 Number, 1 Upper And 1 Lower";
         }
     if( confirm_password !== password ) {

      document.getElementById("password").style.borderColor= "red";
      document.getElementById("errorConfirmPassword").innerHTML = "Is invalid";
         }
 var obj = {
  name: name,
  surname: surname,
  email: email, 
  password: password,
  confirm_password: confirm_password
 };
 console.log(obj);
 

   fetch('http://rest.learncode.academy/api/learncode/friends', {
        method: "POST",
        headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(obj),
   })
   .then(response => response.json()) // response.json() returns a promise
   .then((response) => {
        
        document.getElementById("demo").innerHTML +="Nname:"+ name + "<br>";
        document.getElementById("demo").innerHTML += "Surname:" + surname + "<br>";
        document.getElementById("demo").innerHTML += "Email:" + email;
        // document.getElementById("main").style.display = "blok";
       
     console.log("You saved this item", response); //returns the new item along with its ID
   }) 
  }
  