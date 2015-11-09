/**
 * @ concrete5 package Bootstrap
 * @copyright  Copyright (c) 2014 Hostco. (http://www.hostco.com) V3.1.1
 http://www.concrete5.org/marketplace/themes/bootstrap/license/

 */
/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function($){$.fn.UItoTop=function(options){var defaults={text:'<span class="glyphicon glyphicon-chevron-up"></span>',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1200,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'" class="btn btn-primary">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
if(sd>settings.min)
$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);



 

if (CCM_EDIT_MODE == false) {
!function($) {
		



			var body_width;
			var body_top_padding;
			var top_header_height;
			var bottom_navbar_height;
			var footer_padding_bottom;
		$(function() {		
		//toTop
		$().UItoTop();
		if(BootstrapInputFix!=false){
		//add btn class to all button, html input[type="button"], input[type="reset"], input[type="submit"]
		$('input[type=submit]').not(" .btn-default, .btn-primary ,.btn-success ,.btn-info,.btn-warning,.btn-danger,.btn-link,.ccm-input-submit").addClass('btn btn-default');
		$('input[type=button]').not(" .btn-default, .btn-primary ,.btn-success ,.btn-info,.btn-warning,.btn-danger,.btn-link").addClass('btn btn-default');
		$('input[type=reset]').not(" .btn-default, .btn-primary ,.btn-success ,.btn-info,.btn-warning,.btn-danger,.btn-link").addClass('btn btn-default');
		$('button').not(" .btn-default, .btn-primary ,.btn-success ,.btn-info,.btn-warning,.btn-danger,.btn-link").addClass('btn btn-default');
		
		//textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"]
		
		$('input[type=text]').not(".form-control").addClass('form-control');
		$('input[type=password]').not(".form-control").addClass('form-control');
		$('input[type=email]').not(".form-control").addClass('form-control');
		$('input[type=url]').not(".form-control").addClass('form-control');
		$('input[type=tel]').not(".form-control").addClass('form-control');
		$('textarea').not(".form-control").addClass('form-control');
		$('select').not(".form-control").addClass('form-control');
		}
		//rating
		//$('.ccm-rating input').rating();

		
		//fix for nav justified
			var countLi = $("ul.justified-procent").children().length;
			var liWidth=100/countLi;			
			body_width = $("body").width();
			 var viewportWidth = $(window).width();
		
		
			if(BOOTSTRAP_EDT == 0){
			
			
				if ( typeof BOOTSTRAP_JS_HEAD != 'undefined' && typeof BOOTSTRAP_JS_HEAD != 'undefined'){
					if(BOOTSTRAP_JS_HEAD==1){
						window.prettyPrint && prettyPrint();
						//display tooltip
						$('.bootstrap-tooltip').tooltip();
					}
				}
				else if ( typeof BOOTSTRAP_JS_FOOTER != 'undefined' && typeof BOOTSTRAP_JS_FOOTER != 'undefined'){
					if(BOOTSTRAP_JS_FOOTER==1){
						window.prettyPrint && prettyPrint();
						//display tooltip
						$('.bootstrap-tooltip').tooltip();
					}
				}
			}
		
		
			/*custom top right btn*/
			
			$(".btn_navbar_custom").click(function(e) {
				e.preventDefault();
				var pronavCollapseParent = $(this).parent().parent().parent().parent();
				$(pronavCollapseParent).find('.nav_collapse_custom').toggleClass('in');
				e.stopPropagation();	
			});
			
			
			
			
			//multi lvl dropdown 
			
			$('.drop_a_custom').click(function() {
				var drop_parent = $(this).parent();
				$(drop_parent).toggleClass('open');
				//remove 'open' class from childrens on nav close
				if($(drop_parent).hasClass('open')==false){
				$(drop_parent).find('li').removeClass('open');
				$(drop_parent).siblings('.nav-dropdown').removeClass('open');
				$(drop_parent).siblings('.nav-dropdown').find('li').removeClass('open');				
				}
				else{
				$(drop_parent).siblings('.nav-dropdown').removeClass('open');
				$(drop_parent).siblings('.nav-dropdown').find('li').removeClass('open');
				}
			});
			//space on top
			//navbar-top-fixed-space
			var navbarHeightTop=$('.navbar-fixed-top').outerHeight(true);
			var	navbarHeightBottom=$('.navbar-fixed-bottom').outerHeight(true);
			var	navbarCarousel=$('.navbar-wrapper').outerHeight(true);
			var	navbarBrand=$('.navbar-brand').outerHeight(true);
			
			if(navbarBrand<30){navbarBrand=20;}else{navbarBrand=navbarBrand -30;}
			if(navbarBrand==0){navbarBrand=20;}
			if(navbarBrand<20){navbarBrand=20;}			
			if(navbarHeightTop==0){navbarHeightTop=50;}
			if(navbarHeightBottom==0){navbarHeightBottom=50;}
			if(navbarCarousel==0){navbarCarousel=70;}
			if(BOOTSTRAP_VERSION=='superhero' && navbarBrand<32){navbarBrand=32;}
				$('.navbar-top-fixed-space ').css('margin-top',navbarHeightTop);
				$('body ').css('margin-bottom',navbarHeightBottom);
				$('.full-home-carousel').css('top','-'+navbarCarousel+'px');
				if(BootstrapNavbarLineHeightFix!=false){
				$('.navbar .navbar-nav > li > a').css('line-height',navbarBrand + 'px');
				$('.navbar .navbar-inner .nav-collapse .pronav_list > li > a').css('line-height',navbarBrand + 'px');
				}
			
			$(window).resize(function() {
				navbarHeightTop=$('.navbar-fixed-top').outerHeight(true);
				navbarHeightBottom=$('.navbar-fixed-bottom').outerHeight(true);
				navbarCarousel=$('.navbar-wrapper').outerHeight(true);
				navbarBrand=$('.navbar-brand').outerHeight(true);
				
			if(navbarBrand<30){navbarBrand=20;}else{navbarBrand=navbarBrand -30;}
			if(navbarBrand==0){navbarBrand=20;}
			if(navbarBrand<20){navbarBrand=20;}	
			if(navbarHeightTop==0){navbarHeightTop=50;}
			if(navbarHeightBottom==0){navbarHeightBottom=50;}
			if(navbarCarousel==0){navbarCarousel=70;}
			if(BOOTSTRAP_VERSION=='superhero' && navbarBrand<32){navbarBrand=32;}
				$('.navbar-top-fixed-space ').css('margin-top',navbarHeightTop);
				$('body ').css('margin-bottom',navbarHeightBottom);
				if(BootstrapNavbarLineHeightFix!=false){
				$('.full-home-carousel').css('top','-'+navbarCarousel+'px');
				$('.navbar .navbar-nav > li > a').css('line-height',navbarBrand + 'px');
				}
			});
			
			function resizeNav()
				{
				navbarHeightTop=$('.navbar-fixed-top').outerHeight(true);
				navbarHeightBottom=$('.navbar-fixed-bottom').outerHeight(true);
				navbarCarousel=$('.navbar-wrapper').outerHeight(true);
				navbarBrand=$('.navbar-brand').outerHeight(true);
				if(navbarBrand<30){navbarBrand=20;}else{navbarBrand=navbarBrand -30;}
				if(navbarBrand==0){navbarBrand=20;}
				if(navbarBrand<20){navbarBrand=20;}	
				if(navbarHeightTop==0){navbarHeightTop=50;}
				if(navbarHeightBottom==0){navbarHeightBottom=50;}
				if(navbarCarousel==0){navbarCarousel=70;}
				if(BOOTSTRAP_VERSION=='superhero' && navbarBrand<32){navbarBrand=32;}
				$('.navbar-top-fixed-space ').css('margin-top',navbarHeightTop);
				$('body ').css('margin-bottom',navbarHeightBottom);
				$('.full-home-carousel').css('top','-'+navbarCarousel+'px');
					if(BootstrapNavbarLineHeightFix!=false){
						$('.navbar .navbar-nav > li > a').css('line-height',navbarBrand + 'px');
					}
				}
			setInterval(resizeNav, 100);	

		});


	}(window.jQuery)

}
