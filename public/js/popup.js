
//popup box


/*
 * This function is used to display and hide popup boxes
*/


//the argument data detrmines the box
function toShow(box){
    var boxOne = document.getElementById('firstBox')
    var boxTwo = document.getElementById('secondBox')
    var boxThree = document.getElementById('thirdBox')

    console.log('Clicked');

    //for second popup box
    if(box == 1){
        if(boxOne.style.top === "-100%"){
            boxOne.style.top = "20%";
            boxOne.style.opacity = "1";
        }

        else{
            boxOne.style.top = "-100%";
            boxOne.style.opacity = "0";
            console.log('checked ');
        }
    }

    //for second popup box
    if(box == 2){
        if(boxTwo.style.top === "-100%"){
            boxTwo.style.top = "20%";
            boxTwo.style.opacity = "1";
        }

        else{
            boxTwo.style.top = "-100%";
            boxtwo.style.opacity = "0";
            console.log('checked ');
        }
    }

    //for third popup box
    if(box == 3){
        if(boxThree.style.top === "-100%"){
            boxThree.style.top = "20%";
            boxThree.style.opacity = "1";
        }

        else{
            boxThree.style.top = "-100%";
            boxThree.style.opacity = "0";
            console.log('checked ');
        }
    }

}
