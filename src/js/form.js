(function($) {
    "use strict"
    $(function() {
            
        $('#file').on('change', function(e) {
            console.log($(this).val().replace(/.*(\/|\\)/, ''))
            $('.is--file-label').html($(this).val().replace(/.*(\/|\\)/, ''))
        })
            
    })
})(jQuery);