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
})(jQuery);