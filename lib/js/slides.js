$(document).ready(function(){
	var hamburgerMenu = $('.hamburger-menu');
	$('.hamburger-button').on('click', function(e){
		if(hamburgerMenu.hasClass('active')){
			hamburgerMenu.removeClass('active')
				.find('ul').attr('aria-hidden', true)
				.find('a').attr('tabIndex', '-1');
		}
		else {
			hamburgerMenu.addClass('active')
				.find('ul').attr('aria-hidden', false)
				.find('a').removeAttr('tabIndex');
		}
	});

	var backgrounds = $('.backgrounds').children('.slide-background');
	var resetButton = $('button.reset');

	$('.image-show').on('click', function(e){
		if(e.type === 'click') {
			console.log('DANCE!!!!');
			var section = $(this).closest('section');
			section.addClass('has-background').find('.hidden').addClass('toHide').removeClass('hidden');
			var index = section.index();
			backgrounds.eq(index).css({'background-image': 'url('+ section.data('click-background')+')'});
			resetButton.attr({'tabIndex':'0', 'aria-hidden':'false'}).removeClass('disabled');
		}
	});
	resetButton.on('click', function(e){
		console.log('reset');
		var parentSection = $(this).closest('section');
		parentSection.removeClass('has-background').find('.toHide').addClass('hidden');
		var index = parentSection.index();
		backgrounds.eq(index).css('background-image','none');
		
		var showButton = $(e.target).parent().prev('.image-show');
		$(this).attr({'tabIndex':'-1', 'aria-hidden':'true'}).addClass('disabled');
		showButton.focus();
	});

	$('.sparkle-party').on('click', function(e){
		var targetEl = $(this),
			contents   = targetEl.contents(),
			length     = contents.length,
			iframe     = null;

			for(var i = 0; i<length; i++){
				if(contents[i].nodeType == 8) iframe = contents[i].textContent;
			}

		targetEl.addClass("enabled").html(iframe);
		targetEl.off("click");
	});
});