(function($) {
    'use strict';
    /*--------------------------------------------------------------------
                                Preloader
    ---------------------------------------------------------------------*/
    jQuery(window).on('load', function() {
        jQuery("#preloader").delay(1000).fadeOut(1000);
        jQuery(".loading").fadeOut(1000);
    });
    /*--------------------------------------------------------------------
                                Magnific Popup
    ---------------------------------------------------------------------*/
    jQuery(document).ready(function($) {
        $('.watch_demo').magnificPopup({
            type: 'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>',
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/%id%?autoplay=0'
                    },
                },
                srcAction: 'iframe_src',
            }
        });
    });
    /*--------------------------------------------------------------------
                                Owl Carousel
    ---------------------------------------------------------------------*/
    jQuery(document).ready(function($) {
        $('.owl-carousel').owlCarousel({
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    loop: true,
                    nav: true,
                    items: 1
                },
                576: {
                    nav: true,
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        })
    });
    /*--------------------------------------------------------------------
                                Form Validation
    ---------------------------------------------------------------------*/
    jQuery(document).ready(function($) {
        (function() {
            'use strict'
            var forms = document.querySelectorAll('.needs-validation')
            Array.prototype.slice.call(forms)
                .forEach(function(form) {
                    form.addEventListener('submit', function(event) {
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        }
                        form.classList.add('was-validated')
                    }, false)
                })
        })();
    });
    /*--------------------------------------------------------------------
                                Contact Form Submission
    ---------------------------------------------------------------------*/
    jQuery(document).ready(function($) {
        $("#sucess_alert").hide();
        $("#failed_alert").hide();
        $(".conForm").submit(function() {
            if (this.name.value == "") {
                $("#sucess_alert").hide();
                $("#failed_alert").show();
            } else {
                $("#sucess_alert").show();
                $("#failed_alert").hide();
            }
            return false;
        });
    });
    /*--------------------------------------------------------------------
                                Modal Form Submission
    ---------------------------------------------------------------------*/
    jQuery(document).ready(function($) {
        $("#sucess_modal").hide();
        $(".modalForm").submit(function() {
            if (this.name.value == "") {
                $("#sucess_modal").hide();
            } else {
                $("#sucess_modal").show();
            }
            return false;
        });
    });
    /*--------------------------------------------------------------------
                                Scroll to top
    ---------------------------------------------------------------------*/
    jQuery(document).ready(function($) {
        $('.bck').backToTop({
            iconName: 'fas fa-arrow-up',
            fxName: 'rightToLeft'
        });
    });
    /*--------------------------------------------------------------------
                                Restrict Inspect
    ---------------------------------------------------------------------*/
    jQuery(document).ready(function($) {
        document.onkeydown = function(e) {
            if (e.ctrlKey &&
                (e.keyCode === 67 ||
                    e.keyCode === 86 ||
                    e.keyCode === 85 ||
                    e.keyCode === 117)) {
                return false;
            } else {
                return true;
            }
        };
        $(document).keypress("u", function(e) {
            if (e.ctrlKey) {
                return false;
            } else {
                return true;
            }
        });
    });
})(jQuery);