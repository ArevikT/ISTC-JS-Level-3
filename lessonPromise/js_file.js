fetch("https://jsonplaceholder.typicode.com/todos")

.then(response => response.json())
  
.then(response=> {
    
  for(let i = 50; i< 55; i++){
    var myLi = document.createElement("li");
       for(var key in response[i]){
          document.getElementById("ul").appendChild(myLi).innerHTML += key + response[i][key]+ " ";
        }
      }
    })
