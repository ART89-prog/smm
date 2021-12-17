
$(document).ready(function(){

    // Слайдер отзывы

    $('.reviews-slider').slick({
		infinite: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
                    slidesToScroll: 3,
			    }
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
                slidesToScroll: 1,
			    }
			},
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
                slidesToScroll: 1,
			    }
			}
		]
	});


    // Слайдер посты

    $('.post-slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            }
        ]
    });


    // Анимация

    inView.offset($(window).innerHeight() * 0.25)

    
    if ($('.about').length) {
        inView('.about_items-top')
            .on('enter', el => {
                $(el).addClass('animate__animated animate__fadeInLeft')
            })
    }

    if ($('.about').length) {
        inView('.about_items-bottom')
            .on('enter', el => {
                $(el).addClass('animate__animated animate__fadeInRight')
            })
    }

    if ($('.withdrawal').length) {
        inView('.withdrawal-image')
            .on('enter', el => {
                $(el).addClass('animate__animated animate__fadeInLeft')
            })
    }

    if ($('.program').length) {
        inView('.program_right')
            .on('enter', el => {
                $(el).addClass('animate__animated animate__fadeInRight')
            })
    }


    // Range-slider на главной

    
    function updateTotal(){
        var number = 3970;
        $(".form-control-total-money").text(number.toLocaleString('ru-RU') + " руб")
    }
    var sliderFormat1 = document.getElementById('program-slider1');
    noUiSlider.create(sliderFormat1, {
        start: [15],
        step: 1,
        connect: 'lower',
        range: {
            'min': [0],
            'max': [100]
        },
        format: wNumb({
            decimals: 0
        })
    });
    var inputFormat1 = document.getElementById('slider-span1');
    sliderFormat1.noUiSlider.on('update', function (values, handle) {
        inputFormat1.innerText = values[handle];
        updateTotal();
    });



    var sliderFormat2 = document.getElementById('program-slider2');
    noUiSlider.create(sliderFormat2, {
        start: [23],
        step: 1,
        connect: 'lower',
        range: {
            'min': [0],
            'max': [100]
        },
        format: wNumb({
            decimals: 0
        })
    });
    var inputFormat2 = document.getElementById('slider-span2');
    sliderFormat2.noUiSlider.on('update', function (values, handle) {
        inputFormat2.innerText = values[handle];
        updateTotal();
    });



    var sliderFormat3 = document.getElementById('program-slider3');
    noUiSlider.create(sliderFormat3, {
        start: [350],
        step: 1,
        connect: 'lower',
        range: {
            'min': [0],
            'max': [1000]
        },
        format: wNumb({
            decimals: 0
        })
    });
    var inputFormat3 = document.getElementById('slider-span3');
    sliderFormat3.noUiSlider.on('update', function (values, handle) {
        inputFormat3.innerText = values[handle];
        updateTotal();
    });




       

});
