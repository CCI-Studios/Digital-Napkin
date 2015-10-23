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
}(jQuery));