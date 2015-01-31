$(document).ready(function() {
	enableFixedHeaderOnScroll();
	enableMenuButton();
	enableSocialLinks();
});

function enableFixedHeaderOnScroll() {
	var win = $(window);
	var header = $('body>header');
	var headerChildren = $('body>header>h1, body>header>nav');
	var headerFixed = false;
	checkScrollHeaderFix();
	win.scroll(checkScrollHeaderFix);
	win.resize(checkScrollHeaderFix);

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
		return win.scrollTop() > start.offset().top - 200;
	}

	function isWiderThanCssBreak() {
		return win.width() > 899;
	}

	function fixHeader() {
		headerFixed = true;
		header.addClass('fixed');
		headerChildren.hide(0);
		headerChildren.show(200);
	}

	function unFixHeader() {
		headerFixed = false;
		headerChildren.hide(200, function() {
			header.removeClass('fixed');
			headerChildren.show(0);
		});
	}
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
	$('.social a').click(function(event) {
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