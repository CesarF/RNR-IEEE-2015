$(document).ready(function() {        
        $(".cbp-af-header").load('head.html');
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


 //event
    $(".event_box_img").load(function(){
        img_height = $(this).height();
        $(this).parent(".event_box_wap");
    });
    $(window).on("load resize", function(){
        img_height = $(".event_box_img").height();
        if($(window).width()>550){
            $(".event_box_wap").height();
            $(".event_box_wap").each(function(){
                total_height = $(this).children(".event_box_caption").outerHeight();
                header_height = $(this).children(".event_box_caption").children("h1").outerHeight();
                admin_height = $(this).children(".event_box_caption").children("p").eq(0).outerHeight();
                paragraph_height = $(this).children(".event_box_caption").children("p").eq(1).outerHeight();
                hide_paragraph_height = header_height + admin_height + 10 ;
                $(this).children(".event_box_caption");
            });
        }else{
            $(".event_box_wap").height();
            $(".event_box_wap").each(function(){
                total_height = $(this).children(".event_box_caption").outerHeight();
                header_height = $(this).children(".event_box_caption").children("h1").outerHeight();
                admin_height = $(this).children(".event_box_caption").children("p").eq(0).outerHeight();
                paragraph_height = $(this).children(".event_box_caption").children("p").eq(1).outerHeight();
                hide_paragraph_height = header_height + admin_height + 10 ;
                $(this);
               
            });
        }
    });
    $(".event_box_wap").hover(function(){
        if($(window).width()>550){
            total_height = $(this).children(".event_box_caption").outerHeight();
            header_height = $(this).children(".event_box_caption").children("h1").outerHeight();
            admin_height = $(this).children(".event_box_caption").children("p").eq(0).outerHeight();
            paragraph_height = $(this).children(".event_box_caption").children("p").eq(1).outerHeight();
            hide_paragraph_height = header_height + admin_height + paragraph_height + 10 ;
           
        }
    },function(){
        if($(window).width()>550){
            total_height = $(this).children(".event_box_caption").outerHeight();
            header_height = $(this).children(".event_box_caption").children("h1").outerHeight();
            admin_height = $(this).children(".event_box_caption").children("p").eq(0).outerHeight();
            paragraph_height = $(this).children(".event_box_caption").children("p").eq(1).outerHeight();
            hide_paragraph_height = header_height + admin_height + 10 ;
           
        }
    });

$(document).scroll(function(){
        document_top = $(document).scrollTop();
        event_wapper_top = $("#templatemo_events").position().top - $('#templatemo_banner_menu').outerHeight();
        if(document_top<event_wapper_top){
            event_animate_num = event_wapper_top - document_top;
            event_animate_alpha = (1/event_wapper_top)*(document_top);
            $("#templatemo_events .event_animate_left").css({'left': -event_animate_num,'opacity':event_animate_alpha});
            $("#templatemo_events .event_animate_right").css({'left':event_animate_num,'opacity':event_animate_alpha});
        }else{
            $("#templatemo_events .event_animate_left").css({'left': 0,'opacity':1});
            $("#templatemo_events .event_animate_right").css({'left':0,'opacity':1});
        }
    }); 

