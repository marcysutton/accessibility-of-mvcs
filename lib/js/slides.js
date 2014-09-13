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

  var xGifSelector = '.x-gif-synced-demo',
      xGif = $(xGifSelector);
  xGif.hide();

  var gif = {
    url: 'http://i.imgur.com/KhQ4THw.gif',
    speed: 2,
    bpm: 60,
    playbackRate: 1,
    nTimes: 1.0
  };
  var audio = document.querySelector('audio'),
      xGifResetButton = $('button.x-gif-reset'),
      showButton = $('button.image-show');

  audio.addEventListener("playing", function() {
    console.log('playing');
  }, true);

  $.get('demos/x-gif/get_down_on_it.json').then(function (response) {
    gif.metadata = response;
    setupAudioSynching(audio,
      document.querySelectorAll(xGifSelector),
      gif.metadata);
  });

  showButton.on('click', function(){
    console.log('DANCE!!!!');
    audio.play();
    xGif.show();
    xGifResetButton.attr({'tabIndex':'0', 'aria-hidden':'false'}).removeClass('disabled');
    window.setTimeout(function(){
      xGifResetButton.focus();
    }, 100);
  });
  xGifResetButton.on('click', function(e){
    console.log('reset');
    xGif.hide();
    audio.pause();
    $(this).attr({'tabIndex':'-1', 'aria-hidden':'true'}).addClass('disabled');
    showButton.focus();
  });

	var backgrounds = $('.backgrounds').children('.slide-background');
  var boringButton = $('.boring-button');
	var boringResetButton = $('.boring-reset');
	boringButton.on('click', function(e){
		if(e.type === 'click') {
			console.log('DANCE!!!!');
			var section = $(this).closest('section');
			section.addClass('has-background').find('.hidden').addClass('toHide').removeClass('hidden');
			var index = section.index();
			backgrounds.eq(index).css({'background-image': 'url('+ section.data('click-background')+')'});
			boringResetButton.attr({'tabIndex':'0', 'aria-hidden':'false'}).removeClass('disabled');
		}
	});
	boringResetButton.on('click', function(e){
		console.log('reset');
		var parentSection = $(this).closest('section');
		parentSection.removeClass('has-background').find('.toHide').addClass('hidden');
		var index = parentSection.index();
		backgrounds.eq(index).css('background-image','none');

		$(this).attr({'tabIndex':'-1', 'aria-hidden':'true'}).addClass('disabled');
		boringButton.focus();
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
