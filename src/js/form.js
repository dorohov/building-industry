(function($) {
    "use strict"
    $(function() {
            
        $('#file').on('change', function(e) {
            $('.is--file-label').html($(this).val().replace(/.*(\/|\\)/, ''))
        })

        $('.input-table-countbtn').on('click', function() {
            var action = $(this).attr('data-action')
            var input = $(this).siblings('input[type="number"]')
            var value = input.val()
            if(action == '-' && value > 0) value--
            else if(action == '+') value++
            input.val(value)
        })

        var phoneInput = document.getElementById('phone');
        new IMask(
            phoneInput, {
            mask: '+{7}(900)000-00-00'
        });

        $('form').parsley()
            
    })
})(jQuery);