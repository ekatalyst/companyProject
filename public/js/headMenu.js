
console.log('Header Script Loaded');

function toggleHeadMenu() {
    
    const menu = document.getElementById('headBarMenuContainer')

    // Look for .hamburger
            let hamburger = document.querySelector(".hamburger")

            // On click
            hamburger.classList.toggle("is-active")
            // Do something else, like open/close menu

    if( menu.style.height == '0px' ){
        menu.style.left = '0px'
        menu.style.height = 'calc(100vh - 100px)'
    }
    else {
        menu.style.height = '0px'
        menu.style.left = '-300px'
    }

    console.log('hit');
    

}