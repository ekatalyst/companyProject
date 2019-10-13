
function openCloseDownNav() {
    
    const downMenu = document.getElementById('openNavRoundButton')

    if (downMenu.style.top === '-650px') {
        downMenu.style.top = '-35px'
    }
    else {
        downMenu.style.top = '-650px'        
    }

}

function openCloseDownDashNav() {
    
    const downMenu = document.getElementById('openNavRoundButton')

    if (downMenu.style.top === '-450px') {
        downMenu.style.top = '-35px'
    }
    else {
        downMenu.style.top = '-450px'        
    }

}