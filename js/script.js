
document.querySelector("#textColorbtn").addEventListener("click", changeTextColor())

function changeTextColor(){
    //alert("it's working");
    let textColor = document.querySelector("#textColorbtn").value;
    document.querySelector("body").style.color = textColor;
}

document.querySelector("#textSizebtn").addEventListener("click",changeSize())

function changeSize(){
    let textSize = document.querySelector("#textSize").value;
    document.querySelector("body").style.fontSize = textSize + "em";
}

document.querySelector("#Backgroundbtn").addEventListener("click",changeBackground())

function changeBackground(){
    let backgroundColor = document.querySelector("#bgColor").value;
    document.querySelector("body").style.backgroundColor = backgroundColor;
}

document.querySelector("#alingmentbtn").addEventListener("click",changeAlign())

function changeAlign(){
    let alignC = document.querySelector("#alingment").checked;
    if(alignC){
        document.querySelector("body").style.textAlign = "center";
    }
    else{
        document.querySelector("body").style.textAlign = "left";
    
    }
}
