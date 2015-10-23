(function($){    
    $(function(){
        $("#navigation .btn-menu a").click(toggleMenu);
        $('#twitter-link').parent().addClass('twitter');
    });
    
    function toggleMenu()
    {	
    	if($(window).width() < 1100)
    	{
			$("body").toggleClass("open-menu");
	        return false;
    	}
    }

    $(window).resize(function(){

    	if($(window).width() > 1100)
    	{
    		$("body").removeClass("open-menu");
    	}
    });
})(jQuery);;
(function($) {
	$(function () {
		$(".play.youtube").click(function(){
			var youtube_id = $(this).attr("data-youtube");
			var width = $(this).width();
			var height = $(this).height();
			$(this).wrap('<iframe width="'+width+'" height="260" src="http://www.youtube.com/embed/'+youtube_id+'?autoplay=1" frameborder="0" allowfullscreen></iframe>');
		});
	});
}(jQuery));;
(function($) {;
    var maxHeight = 0;

    $(function(){
        setActive(0);
        $(window).resize(function(){
            maxHeight = 0;
            fixHeight();
        });
        fixHeight();
        setTimeout(fixHeight, 200);
    });
    $(window).load(fixHeight);

    function container()
    {
        return $("body");
    }
    function rows()
    {
        return container().find("#block-views-logo-block-block .content");
    }
    function getActive()
    {
        return rows().filter(".active").find('.view-content');
    }
    function getActiveIndex()
    {
        return getActive().index();
    }
    function setActive(i)
    {
        var current = getActive()
        if (i == current.index())
        {
            return;
        }

        current.addClass("outbound").removeClass("active");
        rows().eq(i).addClass("active").hide().fadeIn(function(){
            current.removeClass("outbound").hide();
        });
        fixHeight();
    }
    function fixHeight()
    {
        var h = getActive().width();
        var h2 = container().width();
        if (h > maxHeight)
        {
            rows().width(h2);
            maxHeight = h;
        }
    }
}(jQuery));;
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
;
(function($) {
    var timer = null;
    var maxHeight = 0;

    $(function(){
        createIndicators();
        setActive(1);
        timer = setInterval(next, 7000);
        console.log(timer);
        $(window).resize(function(){
            maxHeight = 0;
            fixHeight();
        });
        fixHeight();
        setTimeout(fixHeight, 200);
    });
    $(window).load(fixHeight);

    function container()
    {
        return $(".view-slideshow");
    }
    function rows()
    {
        return container().find(".views-row");
    }
    function indicators()
    {
        return container().find(".indicators li");
    }
    function getActive()
    {
        var activeRow = rows().filter(".active");
        return activeRow;

    }
    function getActiveIndex()
    {
        var index = getActive().index();
     
        return index;
    }
    function setActive(i)
    {
        var current = getActive()
        
      
        if (i-1 == current.index())
        {   
            i++;
        }
        
        console.log('started');

        current.addClass("outbound").removeClass("active");
        rows().eq(i-1).addClass("active").hide().fadeIn(function(){
        current.removeClass("outbound").hide();

        });
        fixHeight();

        indicators().removeClass("active").eq(i).addClass("active");
    }
    function fixHeight()
    {
        var h = getActive().find("> div").height();
        if (h > maxHeight)
        {
            rows().height(h).parent().height(h);
            maxHeight = h;
        }
    }
    function max()
    {
        return rows().length;
    }
    function next()
    {
        var i = getActiveIndex();
        i++;
        console.log(getActiveIndex());
        if (i > max())
        {
            i = 1;
        }


        setActive(i);
    }
    function stop()
    {
        clearInterval(timer);
    }

    function createIndicators()
    {
        container().append("<ul class='indicators' />");
        var indicatorsContainer = container().find(".indicators");
        
        indicatorsContainer.append("<li><a href='#' class='btn-pause'><span class='sr-only'>Pause</span></a></li>");
        indicatorsContainer.find(".btn-pause").click(function(){
            stop();
            $(this).addClass("paused");
            return false;
        });
        
        rows().each(function(i){
            indicatorsContainer.append("<li><a href='#' aria-label='Slide "+(i+1)+"' data-indicator='"+(i+1)+"'><span class='sr-only'>Activate slide "+(i+1)+"</span></a></li>");
        });
        indicatorsContainer.find("a[data-indicator]").click(function(){
            indicatorClick($(this).data("indicator"));
            return false;
        });
    }
    function indicatorClick(i)
    {
        setActive(i);
        stop();
    }
}(jQuery));;
/*global jQuery */
/*!
* Lettering.JS 0.7.0
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/
(function($){
	function injector(t, splitter, klass, after) {
		var text = t.text()
		, a = text.split(splitter)
		, inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				inject += '<span class="'+klass+(i+1)+'" aria-hidden="true">'+item+'</span>'+after;
			});
			t.attr('aria-label',text)
			.empty()
			.append(inject)

		}
	}


	var methods = {
		init : function() {

			return this.each(function() {
				injector($(this), '', 'char', '');
			});

		},

		words : function() {

			return this.each(function() {
				injector($(this), ' ', 'word', ' ');
			});

		},

		lines : function() {

			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
				// (of the word "split").  If you're trying to use this plugin on that
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});

		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};

})(jQuery);
;
