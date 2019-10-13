console.log('Main script loaded');

// NOTE: For hover function
console.log("Lol");
//var box;
var boxes = 0;
var boxLen;
var i;
window.onload = function(){
    boxes = document.getElementById("scrollingContainer").children;
    boxLen = boxes.length;
}

function hov(box){
    boxes[box].style.height = "265px";
    boxes[box].style.margin = "0 10px";
    if(box!=0){
        for(var j=box-1; j>=0; j--){
            boxes[j].style.opacity = "0.7";
            boxes[j].style.width = "130px";
        }
    }
    if(box!=11){
        for(var j=box+1; j<boxLen; j++){
            boxes[j].style.opacity = "0.7";
            boxes[j].style.width = "130px";
        }
    }
}

function unHov(){
    for(i=0; i<boxLen; i++){
        boxes[i].style.height = "260px";
        boxes[i].style.margin = "0 1px";
        boxes[i].style.opacity = "1";
        boxes[i].style.width = "150px";
    }
}
