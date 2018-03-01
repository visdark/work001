$(window).on('load', function(){

	"use strict";
 
	/* ========================================================== */
	/*   OWL Carousel                                             */
	/* ========================================================== */
	

	$('.owl-carousel').owlCarousel({
		center:true,
	    autoplay:true,
	    loop:true,
	    margin:40,
	    nav:false,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        600:{
	            items:2,
	            nav:false
	        },
	        1000:{
	            items:6,
	            nav:false,
	            loop:true
	        }
	    }
	})


	
	/* ========================================================== */
	/*   Navigation Background Color                              */
	/* ========================================================== */
	
	$(window).on('scroll', function() {
		if($(this).scrollTop() > 100) {
			$('.navbar-fixed-top').addClass('opaque');
		} else {
			$('.navbar-fixed-top').removeClass('opaque');
		}
	});
 
	
	/* ========================================================== */
	/*   Hide Responsive Navigation On-Click                      */
	/* ========================================================== */
	
	  $(".navbar-nav li a").on('click', function(event) {
	    $(".navbar-collapse").collapse('hide');
	  });

	
	/* ========================================================== */
	/*   Navigation Color                                         */
	/* ========================================================== */
	
	$('#navbar-collapse-02').onePageNav({
		filter: ':not(.external)'
	});


	/* ========================================================== */
	/*   SmoothScroll                                             */
	/* ========================================================== */
	
	$(".nav li a, a.scrool").on('click', function(e) {
		
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
		
		$('html,body').animate({scrollTop:target_top -70}, 1000);
			return false;
		
	});


	/* ========================================================== */
	/*   Newsletter                                               */
	/* ========================================================== */
	
	$('.newsletter_box .newsletter_form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'email':$('input[name="nf_email"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p.newsletter_success_box').show();
					});
				});
				e.preventDefault();
			}
		});
	});	
	

	/* ========================================================== */
	/*   Register                                                 */
	/* ========================================================== */
	
	$('#register-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'names':$('input[name="register_names"]').val(),
					'phone':$('input[name="register_phone"]').val(),
					'email':$('input[name="register_email"]').val(),
					'ticket':$('select[name="register_ticket"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p.register_success_box').show();
					});
				});
				e.preventDefault();
			}
		});
	})
	
	
	/* ========================================================== */
	/*   Contact                                                  */
	/* ========================================================== */
	$('#contact-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'names':$('input[name="contact_names"]').val(),
					'subject':$('input[name="contact_subject"]').val(),
					'email':$('input[name="contact_email"]').val(),
					'phone':$('input[name="contact_phone"]').val(),
					'message':$('textarea[name="contact_message"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p').show();
					});
				});
				e.preventDefault();
			}
		});
	})

	
});


	/* ========================================================== */
	/*   Popup-Gallery                                            */
	/* ========================================================== */
	$('.popup-gallery').find('a.popup1').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
	
	$('.popup-gallery').find('a.popup2').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
 
	$('.popup-gallery').find('a.popup3').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
 
	$('.popup-gallery').find('a.popup4').magnificPopup({
		type: 'iframe',
		gallery: {
		  enabled:false
		}
	});  

	/* ========================================================== */
	/*   Animated-Features                                        */
	/* ========================================================== */
 
 	$('.visage-feature .feature-icon .leaf').on('click',function()
 		{if($(this).parents('.visage-feature').hasClass('feature-show'))
 			{$(this).parents('.visage-feature').removeClass('feature-show')}
 		else {$(this).parents('.visage-feature').addClass('feature-show')}});


 	/* ========================================================== */
	/*   Tabs                                                     */
	/* ========================================================== */

	$(document).ready(function() {

          // Change tab class and display content
          $('div.tab-content').not('[data-tab=1]').addClass('hide');

          $('.tabs-nav li').first().addClass('active');
          $('.tabs-nav li').on('click', function() {
          $(this).addClass('active');
          $('.tabs-nav li').not(this).removeClass('active');

          //start sort
          var sortable = $(this).attr('data-tab');
            $('div[data-tab = '+sortable+']').removeClass('hide');
            $('div.tab-content').not('[data-tab='+sortable+']').addClass('hide');
          });

          //add an all option - to show all tabs when clicked
          $('li[data-tab=all]').on('click', function() {
            $(this).addClass('active');
            $('div.tab-content').removeClass('hide');
          });

        });

	
	
 	