let isBlurred = false;
document.getElementById("element-one").onclick = function(){
    isBlurred = !isBlurred;
    if(isBlurred){
        document.getElementById("element-one").classList.add("blur")
    }else{
        document.getElementById("element-one").classList.remove("blur")
    }
}

let isHoveredOver = false;
document.getElementById("element-two").onmouseover=function() {
    isHoveredOver=true;
    renderSecondBox();
}
document.getElementById("element-two").onmouseout=function() {
    isHoveredOver=false;
    renderSecondBox();
}
function renderSecondBox(){
    if (isHoveredOver) {
        document.getElementById("element-two").style.backgroundColor='red';

    }else{
        document.getElementById("element-two").style.backgroundColor='';

    }
}