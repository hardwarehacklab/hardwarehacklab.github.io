$(document).ready(function() {
	function init() {
		makeChevronGlow();
		enableHeaderFixesOnScroll();
		enableMenuButton();
		enableSocialLinks();
		fixResizableHeights();
	}

	function makeChevronGlow() {
		var win = $(window);

		function init() {
			if($('#home').length) {
				setTimeout(fadeInChevron, 3500);
			}
		}

		function fadeInChevron() {
			if(win.scrollTop() < $('#home').offset().top + 150) {
				$('#chevron').fadeIn(300, function() {
					setTimeout(fadeOutChevron, 2500);
				});
			}
		}

		function fadeOutChevron() {
			$('#chevron').fadeOut(2000);
			setTimeout(fadeInChevron, 3500);
		}

		init();
	}

	function enableHeaderFixesOnScroll() {
		var win = $(window);
		var header = $('body>header');
		var headerChildren = $('body>header>h1, body>header>nav');
		var headerFixed = false;

		function init() {
			checkScrollHeaderFix();
			win.scroll(checkScrollHeaderFix);
			win.resize(checkScrollHeaderFix);
		}

		function checkScrollHeaderFix() {
			if (requiresHeaderFix()) {
				fixHeader();
			} else if(requiresHeaderUnfix()) {
				unFixHeader();
			}
		}

		function requiresHeaderFix() {
			return !headerFixed &&
				isBeyondScrollBreak() && isWiderThanCssBreak();
		}

		function requiresHeaderUnfix() {
			return headerFixed &&
				!(isBeyondScrollBreak() && isWiderThanCssBreak());
		}

		function isBeyondScrollBreak() {
			var start = $('main').length ? $('main') : $('.lead-in');
			return win.scrollTop() > start.offset().top - 150;
		}

		function isWiderThanCssBreak() {
			return win.width() > 899;
		}

		function fixHeader() {
			headerFixed = true;
			headerChildren.hide(0);
			header.removeClass('first-glance').addClass('fixed');
			headerChildren.show(200);
		}

		function unFixHeader() {
			headerFixed = false;
			headerChildren.hide(200, function() {
				header.removeClass('fixed');
				headerChildren.show(0);
			});
		}

		init();
	}

	function enableMenuButton() {
		var menuOverlaid = false;

		$('#menu-button').click(function() {
			if(menuOverlaid){
				$('body>header>nav').removeClass('popout');
			} else {
				$('body>header>nav').addClass('popout');
			}
			menuOverlaid = !menuOverlaid;
		});
	}

	function enableSocialLinks() {
		$('main .social a').click(function(event) {
			var width =  575,
			    height = 400,
				left =   ($(window).width()	- width) / 2,
				top	 =   ($(window).height() - height) / 2,
				url	=    this.href,
				opts =   'status=1' +
						 ',width='	+ width	+
						 ',height=' + height +
						 ',top='	+ top +
						 ',left='	+ left;

			window.open(url, 'social-share', opts);
			event.preventDefault();
		});
	}

	function fixResizableHeights() {
		//Fixes problem with viewport height changing on mobile, as the URL bar disappears
		if($(window).width() <= 639) {
			$('#home>header').each(function(index, value) {
				$(this).css('height', $(this).height() + 'px');
			});
		}
	}

	init();
});