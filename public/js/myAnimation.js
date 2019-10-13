
window.onload = function () {
      
       if (document.documentElement.clientWidth > 768) {
            lax.setup() // init

            const updateLax = () => {
                  lax.update(window.scrollY)
                  window.requestAnimationFrame(updateLax)
            }

            window.requestAnimationFrame(updateLax)
         }
	
}

//carousel
$('.carousel').carousel({
  interval: 5000
})


//header
 $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                $('nav').addClass('whiteHeader');
                $('.logo').addClass('whiteLogo');                
                $('.menuOpenIcon').addClass('whiteLogo');                
            }

            else {
                $('nav').removeClass('whiteHeader');
                  $('.logo').removeClass('whiteLogo');                
                  $('.menuOpenIcon').removeClass('whiteLogo');                
            }
      })

// fullToggleBox

function showFullToggleBox(box) {
    
    //for box 1
    if (box == 1) {
        
        let box1 = document.getElementById('fullToggleBoxContainer1')
        if (box1.style.display != 'block') {
            box1.style.display = 'block'
        }
        else {
            box1.style.display = 'none'
        }
    }

    //for box 2
    if (box == 2) {
        
        let box1 = document.getElementById('fullToggleBoxContainer2')
        if (box1.style.display != 'block') {
            box1.style.display = 'block'
        }
        else {
            box1.style.display = 'none'
        }
    }

    //for box 3
    if (box == 3) {
        
        let box1 = document.getElementById('fullToggleBoxContainer3')
        if (box1.style.display != 'block') {
            box1.style.display = 'block'
        }
        else {
            box1.style.display = 'none'
        }
    }

}