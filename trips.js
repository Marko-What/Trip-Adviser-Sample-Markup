function animeHeader(){ 
		if($( window ).width() < 720 ) {
			what = parseInt($(this).css("height"));
			if( what < 45){
				
				$("div#header").addClass('headerAnim');
				$("div#green").addClass('greemAnim');
			}

			else {
				$("div#header").removeClass('headerAnim');
				$('div#green').removeClass('greemAnim');

			}
	
		
		} /*end of width() < 725 */		

	}

	$("div#header").bind('click', animeHeader);

			
	$(window).on('resize', function () {
    		if($( window ).width() > 720) {
			
				$("div#header").removeClass('headerAnim');
				$('div#green').removeClass('greemAnim');

			}
	});
