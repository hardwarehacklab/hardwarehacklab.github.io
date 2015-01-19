$(document).ready(function() {
	if($('body').hasClass('content')) {
		enableFixedHeaderOnScroll();
	}
	enableMenuButton();
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
		return win.scrollTop() > $('main').offset().top - 200;
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