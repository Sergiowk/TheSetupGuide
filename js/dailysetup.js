$(document).ready(function(){

    (function($){
        $(window).on('load', function(){
            $.instagramFeed({
                'username': 'dailysetuptech',
                'container': "#recommended1",
                'display_profile': false,
                'display_biography': false,
                'display_gallery': true,
                'display_captions': false,
                'callback': null,
                'styling': true,
                'items': 8,
                'items_per_row': 4,
                'margin': 1 
            }),
            $.instagramFeed({
                'username': 'tech4gaming',
                'container': "#recommended2",
                'display_profile': false,
                'display_biography': false,
                'display_gallery': true,
                'display_captions': false,
                'callback': null,
                'styling': true,
                'items': 8,
                'items_per_row': 4,
                'margin': 1 
            }),
            $.instagramFeed({
                'username': 'thedreamsetup',
                'container': "#recommended3",
                'display_profile': false,
                'display_biography': false,
                'display_gallery': true,
                'display_captions': false,
                'callback': null,
                'styling': true,
                'items': 8,
                'items_per_row': 4,
                'margin': 1 
            });
        });
    })(jQuery);

    $(".logos").click(function(){
        link=$(this).attr("href");
        window.open(link,"link" );

        //return false;
    });

});