$(document).ready(function () {
     $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
     function animateHeader() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 50) {
            $('header').addClass('header-active py-0 py-lg-0').removeClass('py-2 py-lg-4');
        } else {
            $('header').removeClass('header-active py-0 py-lg-0').addClass('py-2 py-lg-4');
        }
    }
    
    
    //animation 
    function animation() {

        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();

        $('.animation').each(function () {
            var position = $(this).offset().top;

            if (position < scrollDown + windowHeight - 50) {
                var animacija = $(this).attr('data-animation');
                var delay = $(this).attr('data-delay');
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
                
            }
        });
    }

    animateHeader();
    animation();

    $(window).scroll(function () {
        animateHeader();
        animation();
    });
    
    
    
    //FILL ELEMENTS DEPENDS OF CATEGORY
    $('[data-category]').each(function () {
        var color = $(this).data('category');
        $(this).find('.category-bg').css('background', color);
        $(this).find('.category-border').css('border-color', color);
        $(this).find('.category-color').css('color', color );
    });
    
    
    // EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
    
    
    //ANIMATION 
    
    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var position = $(this).offset().top;
            var animation = $(this).attr('data-animation');
            //var delay = $(this).attr('data-delay');
            if (position < scroll + windowHight - 60) {
                $(this).addClass(animation);
                //$(this).css('animation-delay', delay);
            }
            console.log(position);
        });

    }

    animation();

    $(window).scroll(function () {
        animation();
    });
    
 jQuery.validator.addMethod("ContainsAtLeastOneDigit", function (value) {
                    return /^[a-z]+[0-9]/i.test(value);
                });

                $(function () {
                    $(".contact-form").validate({
                        highlight: function (element) {
                            $(element).closest('.form-group').addClass("has-danger");
                            $(element).addClass("form-control-danger");
                        },
                        unhighlight: function (element) {
                            $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
                            $(element).removeClass('form-control-danger').addClass('form-control-success');
                        },
                        rules: {
                            name: {
                                required: true,
                                rangelength: [2, 20]
                            },
                            email: {
                                required: true,
                                email: true
                            },
                            password: {
                                required: true,
                                minlength: 6,
                                ContainsAtLeastOneDigit:true
                            },
                            repassword: {
                                required: true,
                                minlength: 6,
                                equalTo: "#password"
                            },
                            message: {
                                required: true,
                                maxlength: 255
                            },
                            exampleRadios: {
                                required: true
                            },
                            odgovor: {
                                required: true
                            }




                        },
                        messages: {
                            name: {
                                required: 'Polje Ime je obavezno',
                                rangelength: 'Ime mora biti izmedju 2 i 20 karaktera'

                            },
                            email: {
                                required: 'Email je obavezno polje',
                                email: 'Molimo unesite validan Email'
                            },
                            password: {
                                required: 'Polje je obavezno',
                                minlength: 'Minimalno mora imati 6 karaktera',
                                ContainsAtLeastOneDigit:'Mora imati bar jedan broj'
                            },
                            repassword: {
                                required: 'Polje je obavezno',
                                minlength: 'Minimalno mora imati 6 karaktera',
                                equalTo: "Paswordi se ne poklapaju"
                            },
                            message: {
                                required: 'Polje je obavezno',
                                maxlength: 'Polje ne sme biti duze od 255 karaktera'
                            },
                            exampleRadios: {
                                required: 'Polje je obavezno'
                            },
                            odgovor: {
                                required: 'Polje je obavezno'
                            }

                        },
                        errorElement: 'p',
                        errorPlacement: function (error, element) {
                            error.appendTo($(element).closest('.form-group').find('.error-msg'));
                        }

                    });
                });
            });
            //Form Validation

    
    
    







//end document.ready


