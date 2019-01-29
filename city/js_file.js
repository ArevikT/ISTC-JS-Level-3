
var div = [];
for( i = 0; i<4; i++ ){
    div[i] = document.createElement("div");
    document.getElementById("first").appendChild(div[i]);
    div[i].className = "img"+ i;
    div[i].style.width = "120px";
    div[i].style.height = "120px";
}

var div1 = [];
for( i = 0; i<8; i++ ){
    div1[i] = document.createElement("div");
    document.getElementById("second").appendChild(div1[i]);
    div1[i].className = "images"+ i;
    div1[i].style.width = "120px";
    div1[i].style.height = "120px";
}
var x = document.getElementById("menus").style.display = "none"
function myFunction(){
    if(document.getElementById("menus").style.display == "none"){
        
        document.getElementById("menus").style.display = "flex";
    }
    
      else  document.getElementById("menus").style.display = "none"
    
}
