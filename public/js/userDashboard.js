
console.log('Script Loaded!');

function toggleBox(box) {

    const box1 = document.getElementById('mainContentBox1')
    const box2 = document.getElementById('mainContentBox2')
    const box3 = document.getElementById('mainContentBox3')

    closeAllBox()

    if (box == 1) {
       // box1.style.display = 'block'
        box1.style.height = 'auto'
        box1.style.paddingBottom = '50px'
    }

    if (box == 2) {
        //box2.style.display = 'block'
        box2.style.height = 'auto'
        box1.style.paddingBottom = '0px'
    }

    if (box == 3) {
        //box2.style.display = 'block'
        box3.style.height = 'calc(100vh - 80px)'
        box1.style.paddingBottom = '0px'
    }
    
}

function closeAllBox() {
    const box1 = document.getElementById('mainContentBox1')
    const box2 = document.getElementById('mainContentBox2')
    const box3 = document.getElementById('mainContentBox3')

    //box1.style.display = 'none'
    //box2.style.display = 'none'
    box1.style.height = '0px'
    box2.style.height = '0px'
    box3.style.height = '0px'    
}

function openNot(not) {
    const not1 = document.getElementById('expandNotification1')
    const not2 = document.getElementById('expandNotification2')
    const not3 = document.getElementById('expandNotification3')
    const butt1 = document.getElementById('closeExpandNotifiactionButton1')
    const butt2 = document.getElementById('closeExpandNotifiactionButton2')
    const butt3 = document.getElementById('closeExpandNotifiactionButton3')

    
    if (not == 1) {
        if (not1.style.display == 'none') {
            not1.style.display = 'block'
            butt1.style.transform = 'rotate(180deg)'
        }

        else {
            not1.style.display = 'none' 
            butt1.style.transform = 'rotate(0deg)'


        }    
    }
    
    if (not == 2) {
        if (not2.style.display === 'none') {
            not2.style.display = 'block'
            butt2.style.transform = 'rotate(180deg)'
        }

        else {
            not2.style.display = 'none'
            butt2.style.transform = 'rotate(0deg)'
        }    
    }

    if (not == 3) {
        if (not3.style.display == 'none') {
            not3.style.display = 'block' 
            butt3.style.transform = 'rotate(180deg)'
        }

        else {
            not3.style.display = 'none'  
            butt3.style.transform = 'rotate(0deg)'
        }    
    }
    
}

function showMainNot() {
    const mainNot = document.getElementById('mainHeadNotificationContainer')
    
    if (mainNot.style.height == '0px') {
        mainNot.style.height = 'auto'
        mainNot.style.padding = '10px 20px'
    }

    else {
        mainNot.style.height = '0px'
        mainNot.style.padding = '0px'
    }
}

function showMainSettings() {
    const subSett = document.getElementById('mainSettingSubSettingContainer')

    if (subSett.style.height == '0px') {
        subSett.style.height = '100px';
    }

    else {
        subSett.style.height = '0px'
    }
}
