
console.log('Script Loaded')


function toggleBox(boxNo) {

    const boxOne = document.getElementById('aboutBox')
    const boxTwo = document.getElementById('teamBox')
    const boxThree = document.getElementById('projectBox')
    const boxFour = document.getElementById('investmentBox')
    const boxFive = document.getElementById('contactBox')
    const boxSix = document.getElementById('invInfoBox')
    const newToogle1 = document.getElementById('toggleMenu1')
    const newToogle2 = document.getElementById('toggleMenu2')
    const newToogle3 = document.getElementById('toggleMenu3')
    const newToogle4 = document.getElementById('toggleMenu4')
    const newToogle5 = document.getElementById('toggleMenu5')
    const newToogle6 = document.getElementById('toggleMenu6')


    toggleAllOf()

    if (boxNo == 1) {
        newToogle1.classList.toggle('colorlib-active')
        if (boxOne.style.display == 'none') {
            boxOne.style.display = 'block'
        }
        else {
            boxOne.style.display = 'none'
            newToogle2.classList.add('colorlib-active')
        }
    }

    if (boxNo == 2) {
        newToogle2.classList.toggle('colorlib-active')
        if (boxTwo.style.display == 'none') {
            boxTwo.style.display = 'block'
        }
        else {
            boxTwo.style.display = 'none'
        }
    }

    if (boxNo == 3) {
        newToogle3.classList.toggle('colorlib-active')
        if (boxThree.style.display == 'none') {
            boxThree.style.display = 'block'
        }
        else {
            boxThree.style.display = 'none'
        }
    }

    if (boxNo == 4) {
        newToogle4.classList.toggle('colorlib-active')       
        if (boxFour.style.display == 'none') {
            boxFour.style.display = 'block'
        }
        else {
            boxFour.style.display = 'none'
        }
    }

    if (boxNo == 5) {
        newToogle5.classList.toggle('colorlib-active')        
        if (boxFive.style.display == 'none') {
            boxFive.style.display = 'block'
        }
        else {
            boxFive.style.display = 'none'
        }
    }

    if (boxNo == 6) {
        newToogle6.classList.toggle('colorlib-active')        
        if (boxSix.style.display == 'none') {
            boxSix.style.display = 'block'
        }
        else {
            boxSix.style.display = 'none'
        }
    }
}

function toggleAllOf() {

    const boxOne = document.getElementById('aboutBox')
    const boxTwo = document.getElementById('teamBox')
    const boxThree = document.getElementById('projectBox')
    const boxFour = document.getElementById('investmentBox')
    const boxFive = document.getElementById('contactBox')
    const boxSix = document.getElementById('invInfoBox')
    const newToogle1 = document.getElementById('toggleMenu1')
    const newToogle2 = document.getElementById('toggleMenu2')
    const newToogle3 = document.getElementById('toggleMenu3')
    const newToogle4 = document.getElementById('toggleMenu4')
    const newToogle5 = document.getElementById('toggleMenu5')
    const newToogle6 = document.getElementById('toggleMenu6')

    boxOne.style.display='none'
    boxTwo.style.display='none'
    boxThree.style.display='none'
    boxFour.style.display='none'
    boxFive.style.display = 'none'
   // boxSix.style.display = 'none'
    newToogle1.classList.remove('colorlib-active')
    newToogle2.classList.remove('colorlib-active')
    newToogle3.classList.remove('colorlib-active')
    newToogle4.classList.remove('colorlib-active')
    newToogle5.classList.remove('colorlib-active')
    //ssssnewToogle6.classList.remove('colorlib-active')

}