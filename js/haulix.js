/**
 * Created by KRM on 3/5/16.
 */

$(document).ready(function(){

    // Accommodating 3-digit numbers inside a notification box
    var notificationNumber = $('#notification_nr');

    if ($(notificationNumber).text().length >= 3) {
        $(notificationNumber).css({
            "font-size": "0.9rem",
            "padding-top":"2px"
        });
    } else {
        $(notificationNumber).css({
            "font-size": "1.2rem",
            "padding-top": "initial"
        });
    }


    var recipientNumber = $("#rcpnts_nr");

    if ($(recipientNumber).text().length >= 3) {
        $(recipientNumber).css({
            "font-size": "1rem",
            "padding-top":"3px"
        });
    } else {
        $(recipientNumber).css({
            "font-size": "1.3rem",
            "padding-top": "1px"
        });
    }



    // Swapping text in 'View More...' buttons on click
    $(".viewmore_activities_btn").on("click", function() {
        var el = $(this);
        el.text() == el.data("text-swap")
            ? el.text(el.data("text-original"))
            : el.text(el.data("text-swap"));
    });



    // Animated progress bars for dashboard's promo statistics
    (function($){

        //* This is based on Stephen Fairbanks' simple progress bar. This allows you to create multiple progress bars that switch between verticle and horizontal upon browser resize. Don't know if my iteration is the most elegant way to do it but it works, and the markup is minimal.     */
        function moveProgressBar() {

            //Create arrays to hold the wrapper divs and progress-bar divs respectively
            var progressWrap = [];
            var progressBar = [];
            var windowWidth = $( window ).width();

            // the value we compare to the windowWidth determines the window width that will make the bars vertical or horizontal. In this case, if the windowWidth is less than 800px, then the bars will switch to the vertical orientation.

            var responsive = ( windowWidth > 200 ) ? false : true;

            $('.progress-wrap').each(function(){
                // it might be better to create these arrays outside this part of the function so this isn't repeated every time the browser width is changed

                //adds each div with the class .progress-wrap to the progressWrap array
                progressWrap.push(this);

            });

            $(".progress-bar").each(function(){
                //adds each div with the class .progress-wrap to the progressBar array
                progressBar.push(this);
            });


            // Loop through each div in the progressWrap array
            for ( var i = 0; i < progressWrap.length; i++) {


                // Find percentage based on the element's data attribute
                var getPercent = ($(progressWrap[i]).data('progress-percent') / 100);

                // If the viewport width is smaller than the value specified on line 12 then measure the element's height

                //This is for a vertical orientation
                if (responsive) {
                    var getProgressWrapDimension = $(progressWrap[i]).height();


                } else // Otherwise measure the element's width
                {
                    var getProgressWrapDimension = $(progressWrap[i]).width();
                }

                //
                var progressTotal = getPercent * getProgressWrapDimension;

                var animationLength = 2500;
                //There's definitely a better way to do this because this was already evaluated, but its 4:30 am.
                if ( responsive === false ) {

                    $(progressBar[i]).stop().animate({
                        left: progressTotal
                    }, animationLength, "swing", function() {

                    });
                } else {
                    progressTotal =  -Math.abs(progressTotal);
                    $(progressBar[i]).stop().animate({
                        top: progressTotal
                    }, animationLength, "swing", function() {

                    });

                }
            }

        }
        // on page load...
        $(document).ready(moveProgressBar());
        // on browser resize...
        $(window).resize(function() {
            $('.progress-bar').css({'top': '0', 'left' : '0'});
            moveProgressBar();

        });

    })(jQuery);



    // Animating the standard hamburger-menu
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });




    // The sending schedule options 'freezer' behavior
    var freezerBox = $('.freezer');

    $('[name="radio-group"]').on('change', function() {
        if($('#sendlater').prop('checked')){

         $(freezerBox).css('display','none');

        } else {

            $(freezerBox).css('display','block');

        }

    });


    // Make the 'All' selector (CONTACTS page) selected by default
    $("#all_contacts_selector").focus();




    // Select multiple contact 'stripes' in Reports
    $(".report_stripe").on('click',function(){
        $(this).toggleClass('selected_report_contact');
    });


    // Select one contact 'stripe' in Contacts
    $(".contacts_group_stripe").on('click', function(){
        $(".contacts_group_stripe.active_stripe").removeClass('active_stripe');
        $(this).addClass("active_stripe");
    });


    // Select one takedown in Anti-Piracy ('My Takedowns' tab)
    $(".takedownbox").on('click', function(){
        $(".takedownbox.selected_takedown").removeClass('selected_takedown');
        $(this).addClass("selected_takedown");
    });


    // Select one promo from the Promo List ('promo edit 3')
    $(".promolist_box").on('click', function(){
        $(".promolist_box.selectedpromo").removeClass('selectedpromo');
        $(this).addClass("selectedpromo");
    });


});
