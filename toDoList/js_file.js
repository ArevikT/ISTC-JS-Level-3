var arr = [];

function myAddFunction(){

    var addText = document.getElementById("listInput").value;
    arr.unshift(addText);

    var inputDiv = document.createElement("div");
    var iconCheck = document.createElement("i");
    var spanInput = document.createElement("span");
    var iconDel = document.createElement("i");

    spanInput.style.color = "green";
    wrap.insertBefore(inputDiv, wrap.childNodes[0]);
    inputDiv.id = "addDiv";
    document.getElementById("addDiv").appendChild(iconCheck);
    iconCheck.className = "far fa-check-square";
    document.getElementById("addDiv").appendChild(spanInput).innerHTML = addText;
    document.getElementById("addDiv").appendChild(iconDel);
    iconDel.className = "fas fa-trash-alt";
     
    document.getElementsByClassName( "far fa-check-square")[0].addEventListener("click", myFunctionCheck);
    iconCheck.style.color = "green";
    function  myFunctionCheck(){
        if(this.style.color == "green"){
            this.style.color = "red";
            this.parentElement.getElementsByTagName("span")[0].style.color = "red";
            this.parentElement.getElementsByTagName("span")[0].style.textDecoration = "line-through";
        }
        else {
            this.style.color = "green";
            this.parentElement.getElementsByTagName("span")[0].style.textDecoration = "none";
            this.parentElement.getElementsByTagName("span")[0].style.color = "green";
        };
    };
    document.getElementsByClassName("fas fa-trash-alt")[0].addEventListener("click", myFunctionDelete);

    function myFunctionDelete() {
        this.parentElement.remove();
       // console.log(arr);
        var contentSpan = this.parentElement.children[1].textContent;
        var index = arr.indexOf(contentSpan);
        arr.splice(index,1);
        //console.log(arr);   
    };
};

var spans = document.getElementsByTagName("span");

function myFunctionShowAll(){
    for (let i=0; i < spans.length; i++) {
        spans[i].parentElement.style.display = "flex";
    };
};

function myFunctionShowActive() {
    for (let j = 0; j < spans.length; j++) {
        spans[j].parentElement.style.display = "flex";
    };
    for (let i=0; i < spans.length; i++) {
        if (spans[i].style.color === "red") {
           spans[i].parentElement.style.display = "none";
        };
    };
};

function myFunctionShowCompleted() {
    for (let j = 0; j < spans.length; j++) {
        spans[j].parentElement.style.display = "flex";
    };
    for (let i=0; i < spans.length; i++) {
        if (spans[i].style.color === "green") {
            spans[i].parentElement.style.display = "none";
        };
    };
};