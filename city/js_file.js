
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

function myFunction(){
    if(document.getElementById("vertical").style.display == "none"){
        
        document.getElementById("vertical").style.display = "flex";
        document.getElementById("vertical").style.flexDirection = "column";
    }
    
      else  document.getElementById("vertical").style.display = "none"
    
}
var body = document.getElementById("main");
function myFunction1() {
    if(body.clientWidth > "472") {
        document.getElementById("vertical").style.display = "none"
    }
}