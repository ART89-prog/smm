
$(document).ready(function(){

// mob nav
    $('.open-menu').click(function(){
        $('.aside--lk').addClass('active');
        $('.overlay--lk').addClass('active');
    });
    $('.overlay--lk').click(function(){
        $('.aside--lk').removeClass('active');
        $('.overlay--lk').removeClass('active');
    });


// Удаление файла
	$('.form .file .selected .remove').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.file')

		$(this).closest('div').remove()
		parent.find('input[type=file]').val('')
	})

// Копирование ссылки
    new ClipboardJS(".js-btn-clipboard").on("success", function(e) {

    });

    $('.js-copy-text').each(function(i, item) {
        $(item).addClass('referrals_item-link-' + i);
    });
       
    $(".js-btn-clipboard").click(function(e) {
        var val = $(this).data("after-text");
        $(this).text(val);
    });



    	// Пароль
	$('body').on('click', '.password-control', function () {
		if ($('#password-input').attr('type') == 'password') {
			$(this).addClass('view');
			$('#password-input').attr('type', 'text');
		} else {
			$(this).removeClass('view');
			$('#password-input').attr('type', 'password');
		}
		return false;
	});





    $(window).resize(() => {
        // Моб. версия
        if (!fiestResize) {
            $('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
            if ($(window).width() < 360) $('meta[name=viewport]').attr('content', 'width=360, user-scalable=no')
    
            fiestResize = true
        } else {
            fiestResize = false
        }
    })


    	// Моб. версия
	fiestResize = false

	if ($(window).width() < 360) {
		$('meta[name=viewport]').attr('content', 'width=360, user-scalable=no')

		fiestResize = true
	}



	$('body').on('click', '.password-control2', function () {
		if ($('#password-input2').attr('type') == 'password') {
			$(this).addClass('view');
			$('#password-input2').attr('type', 'text');
		} else {
			$(this).removeClass('view');
			$('#password-input2').attr('type', 'password');
		}
		return false;
	});
    


// niceSelect
    $('select').niceSelect();


    // $('select').niceSelect();
    $.fn.allTheClasses = function() {
        return this[0].className.split(' ').slice(1,this[0].length);
    }
    $('.nice-select .option').click(function () {
        var newClass = $(this).allTheClasses();
        $(this).parents('.nice-select').find('.current').attr('class', 'current ' + newClass);
    });


    tippy('[data-tippy-content]', {
        theme: 'light',
        animation: 'scale',
        maxWidth: 220
    });

    tippy('.social-list__btn--other', {
        theme: 'light',
        animation: 'scale',
        maxWidth: 275,
        trigger: 'click',
        placement: 'left-start',
        content(reference) {
            const id = reference.getAttribute('data-template');
            const template = document.getElementById(id);
            return template.innerHTML;
        },
        allowHTML: true,
    });

    // $('.social-list__btn--other').click(function(){
    //     $('.social-list__drop').toggleClass('active');
    // });

    if (is_touch_device()) {
        let ts

        $('body').on('touchstart', (e) => { ts = e.originalEvent.touches[0].clientX; })

        $('body').on('touchend', (e) => {
            let te = e.originalEvent.changedTouches[0].clientX    

            if (ts > te + 50) {               
                $('.aside--lk').removeClass('active');
                $('.overlay--lk').removeClass('active');
            } else if (ts < te - 50) {

            }
        })
    }

});


const is_touch_device = () => !!('ontouchstart' in window)