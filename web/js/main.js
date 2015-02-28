$(document).ready(function() {        
        $(".cbp-af-header").load('head.html .row');
      });

$(document).ready(function() {        
        $(".footer_2_img").load('head.html .footer_2_Container');
      });

$(document).ready(function() {        
        $("#contenedor_pago").load('head.html #btn_pago');
      });
$(document).ready(function() {        
        $("#interblock_footer").load('head.html #footer_container');
      });
// Document ready
$(function() {

/*-----------------------------------------------------------------------------------*/
/*	02. NAVBAR STICKY + SELECTED
/*-----------------------------------------------------------------------------------*/
	

var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.cbp-af-header' ),
		didScroll = false,
		changeHeaderOn = 10;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 100 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'cbp-af-header-shrink' );
		}
		else {
			classie.remove( header, 'cbp-af-header-shrink' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();

/*-----------------------------------------------------------------------------------*/
/*	06. RESPONSIVE MENU
/*-----------------------------------------------------------------------------------*/

		jQuery("#collapse").hide();
		jQuery("#collapse-menu").on("click", function () {
		
		    jQuery("#collapse").slideToggle(300);
		    return false;
		    
		}, function () {
		    
		    jQuery("#collapse").slideToggle(300);
		    return false;
		});

});
// Oculta y muestra Div agenda
function mostrar1() {
          div1 = document.getElementById('Schedule1');
          div2 = document.getElementById('Schedule2');          
          div3 = document.getElementById('Schedule3');

          if ( div1.style.display == 'none')
               {                    
            	div1.style.display = 'block';
            	div2.style.display = 'none';
            	div3.style.display = 'none';          	   }

          else {             
            div1.style.display = 'none';
            div2.style.display = 'none';
            div3.style.display = 'none';  
          }
        }

function mostrar2() {
		div1 = document.getElementById('Schedule1');
        div2 = document.getElementById('Schedule2');          
        div3 = document.getElementById('Schedule3');

          if ( div2.style.display == 'none')
               {                    
            	div1.style.display = 'none';
            	div2.style.display = 'block';
            	div3.style.display = 'none';  
          	   }
          	   
          else {             
            div1.style.display = 'none';
            div2.style.display = 'none';
            div3.style.display = 'none'; 
          }
        }

function mostrar3() {
          div1 = document.getElementById('Schedule1');
          div2 = document.getElementById('Schedule2'); 
          div3 = document.getElementById('Schedule3');
          if ( div3.style.display == 'none')
               {                    
            	div1.style.display = 'none';
            	div2.style.display = 'none';
            	div3.style.display = 'block'; 
          	   }
          	   
          else { 
          	div1.style.display = 'none';
            div2.style.display = 'none';
            div3.style.display = 'none'; 
          }
        }


 // Slider script 
 $(function () {

	      // Slideshow 4
	      $("#slider").responsiveSlides({
	        auto: true,
	        pager: false,
	        nav: true,
	        speed: 500,
	        namespace: "callbacks",
	        before: function () {
	          $('.events').append("<li>before event fired.</li>");
	        },
	        after: function () {
	          $('.events').append("<li>after event fired.</li>");
	        }
	      });

	    });

 		$(function() {

				$("#owl-demo").owlCarousel({
					items : 6,
					lazyLoad : true,
					autoPlay : true,
					navigation : true,
					navigationText : ["", ""],
					rewindNav : true,
					scrollPerPage : false,
					pagination : false,
					paginationNumbers : false,
				});

			});