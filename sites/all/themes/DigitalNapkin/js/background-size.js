(function($){

$(function(){

 	 	 var max1=$('.view-slideshow .views-row').length;
     	for(var i=1; i<=max1; i++)
        {
				var imgSrc1 = $('.view-slideshow .views-row-'+i+' .views-field-field-image img').attr('src');
				var current2 = $('.view-slideshow .views-row-'+i+' .views-field-field-image');
				$('.view-slideshow .views-row-'+i+' .views-field-field-image img').remove();
				$(current2).append('<div class="backbg"></div>');
				$('.view-slideshow .views-row-'+i+' .views-field-field-image .backbg').css('background-image', 'url(' + imgSrc1 + ')'); 

		}
	function sliderHeight()
	{	var width=$('.view-slideshow').width();
		$('.view-slideshow .backbg').height(0.55*width).parents('.views-row').height(0.55*width);
		$('.view-slideshow .backbg').parents('.view-content').height(0.55*width)
	}

		sliderHeight();
	   setTimeout(sliderHeight, 200);
	 $(window).resize(function(){
	 	sliderHeight();
        });
});

})(jQuery);
