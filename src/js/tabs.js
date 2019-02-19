(function($) {
    "use strict"
    $(function() {

        var classes = {
            trigger: '.__tab-trigger',
            block: '.__tab-container',
            data: 'data-tabid'
        }

        var current = $(classes.trigger + '.is--active')

        current.each(function() {
            var id = $(this).attr(classes.data)
            if(id) showTab($(this).attr(classes.data))
        })

        $(classes.trigger).on('click', function() {
            $(classes.block).hide()
            $(classes.trigger).removeClass('is--active')
            showTab($(this).attr(classes.data))
            $(this).addClass('is--active')
        })
            
        function showTab(id) {
            $(classes.block + "[" +  classes.data+ "=" + id + "]").css('display', 'block')
        }
    })
})(jQuery);