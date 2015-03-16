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
        $("#contenedor_pago_lugar").load('head.html #btn_pago');
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

// Color Gris #6E6B6B

// $(document).ready(function(){ 
//    $("mostrar1").click(function(){
//       $(".AgendaArt2").css("background", "");
//    });
// });


$(document).ready(function() {        

		$(".AgendaArt2").addClass("AgendaArt2_Gris");
        $(".AgendaArt2").removeClass("AgendaArt2");
        $(".AgendaArt3").addClass("AgendaArt3_Gris");
        $(".AgendaArt3").removeClass("AgendaArt3");

      });

function mostrar1() {

	        div1 = document.getElementById('Schedule1');
	        div2 = document.getElementById('Schedule2');          
	        div3 = document.getElementById('Schedule3');

	        $(".AgendaArt1_Gris").addClass("AgendaArt1");            
	      	$(".AgendaArt1_Gris").removeClass("AgendaArt1_Gris");
	        $(".AgendaArt2_Gris").addClass("AgendaArt2");            
	      	$(".AgendaArt2_Gris").removeClass("AgendaArt2_Gris");
	        $(".AgendaArt3_Gris").addClass("AgendaArt3");            
	        $(".AgendaArt3_Gris").removeClass("AgendaArt3_Gris");
		
		  if ( div1.style.display == 'none')

            {                              

	        $(".AgendaArt2").addClass("AgendaArt2_Gris");
	        $(".AgendaArt2").removeClass("AgendaArt2");
	        $(".AgendaArt3").addClass("AgendaArt3_Gris");
	        $(".AgendaArt3").removeClass("AgendaArt3");

        	div1.style.display = 'block';
        	div2.style.display = 'none';
        	div3.style.display = 'none';          	   
           	}

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


	        $(".AgendaArt1_Gris").addClass("AgendaArt1");
	        $(".AgendaArt1_Gris").removeClass("AgendaArt1_Gris");
	        $(".AgendaArt2_Gris").addClass("AgendaArt2");
	        $(".AgendaArt2_Gris").removeClass("AgendaArt2_Gris");
	        $(".AgendaArt3_Gris").addClass("AgendaArt3");
	        $(".AgendaArt3_Gris").removeClass("AgendaArt3_Gris");
            

          if ( div2.style.display == 'none')

               {

            $(".AgendaArt1").addClass("AgendaArt1_Gris");
	        $(".AgendaArt1").removeClass("AgendaArt1");
	        $(".AgendaArt2").addClass("AgendaArt2");
	        $(".AgendaArt2").removeClass("AgendaArt2_Gris");
	        $(".AgendaArt3").addClass("AgendaArt3_Gris");
	        $(".AgendaArt3").removeClass("AgendaArt3");
        	
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


	        $(".AgendaArt1_Gris").addClass("AgendaArt1");
	        $(".AgendaArt1_Gris").removeClass("AgendaArt1_Gris");
	        $(".AgendaArt2_Gris").addClass("AgendaArt2");
	        $(".AgendaArt2_Gris").removeClass("AgendaArt2_Gris");
	        $(".AgendaArt3_Gris").addClass("AgendaArt3");
	        $(".AgendaArt3_Gris").removeClass("AgendaArt3_Gris");


          if ( div3.style.display == 'none')

               {         

            $(".AgendaArt1").addClass("AgendaArt1_Gris");
	        $(".AgendaArt1").removeClass("AgendaArt1");
	        $(".AgendaArt2").addClass("AgendaArt2_Gris");
	        $(".AgendaArt2").removeClass("AgendaArt2");
	        $(".AgendaArt3").addClass("AgendaArt3");
	        $(".AgendaArt3").removeClass("AgendaArt3_Gris");           


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

//Sweet Scroll Efect.

 $(function(){

     $('a[href*=#]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 1000);

                 return false;

            }

       }

   });

});


 // Slider script 
 $(function () {

	      // Slideshow 4
	      $("#slider").responsiveSlides({
	        auto: true,
	        pager: false,
	        nav: true,
	        speed: 2000,
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

 		$(document).ready(function(){ 
   $('#biografia_1_btn').on('click',function(){
      $('#bigrafia_1_div').toggle('slow');
   });
   $('#biografia_2_btn').on('click',function(){
      $('#bigrafia_2_div').toggle('slow');
   });
});