;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});

			$('#valley').click(function(){
			   window.location.href='/valley';
			});

			$('#cupertino').click(function(){
			   window.location.href='/cupertino';
			});

			$('#nature').click(function(){
			   window.location.href='/nature';
			});

})(jQuery)