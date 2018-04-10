    jQuery('.select-main .close').hide();
    jQuery(document).on('click','.select-main .close', function(){
        $(this).siblings('.wp-travel-active').removeClass('wp-travel-active');
        $(this).siblings('.carret').show();
        $(this).hide();
        
    });
    jQuery(document).on( 'click', '.select-main, .select-main .caret', function(e){
        if($(this).find('ul.wp-travel-active').length == 0){
            $(this).children('ul').addClass('wp-travel-active');
            $(this).children('.close').show();
            $(this).children('.carret').hide();
        } else{
            $(this).children('.carret').show();
            $(this).children('.close').hide();
            $(this).children('ul').removeClass('wp-travel-active');
        }
    });

    $(document).on("click", function(event){
        var $trigger = $(".select-main");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $("ul.wp-travel-active").removeClass("wp-travel-active");
            $('.select-main').children('.carret').show();
            $('.select-main').children('.close').hide();
        }            
    });

    jQuery(document).on( 'change', '.select-main li input.multiselect-value', function($) { //on change do stuff
        var total_inputs_length = jQuery(this).closest( '.select-main' ).find( 'li input.multiselect-value' ).length;
        var total_checked_length = jQuery(this).closest( '.select-main' ).find( 'li input.multiselect-value:checked' ).length;
        // alert( total_inputs_length + ' - ' + total_checked_length );

        if ( total_checked_length == total_inputs_length ) {
            jQuery(this).closest( '.select-main' ).find( '.multiselect-all' ).prop('checked', true);
        } else {
            jQuery(this).closest( '.select-main' ).find( '.multiselect-all' ).prop('checked', false);            
        }        
        jQuery(this).closest('li').toggleClass('selected');

    });
    jQuery('.multiselect-all').change(function($){
        if ( ! jQuery(this).is(':checked') ) {
            jQuery(this).closest('li').siblings().removeClass('selected').find('input.multiselect-value').prop('checked', false);
        } else {
            jQuery(this).closest('li').siblings().addClass('selected').find('input.multiselect-value').prop('checked', true);
            
        }
    })
    var updateTable = function(event){
        var currentID = jQuery(this).attr('id');
        var countSelected = jQuery(this ).closest('.select-main').find('li.selected').length
        jQuery( this ).closest('.select-main').find('ul').siblings('.selected-item').html(countSelected + ' item selected');
    }
    jQuery(document).on('input click change','input.wp-travel-multi-inner', updateTable)
