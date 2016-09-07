/*
 * KingComposer Page Builder
 *
 * (c) Copyright king-theme.com
 *
 *
 * kc.builder.js
 *
*/

( function($){

	var relist = $(".tp-list_sliders");
	var new_button = relist.find("li.tls-slide.tls-exportall");
	var export_status = relist.find("li.status-exportall");

	if ( !new_button.get(0) ) { // if button does not exists, just create it
		// create new button object	
		new_button = $('<li class="tls-slide tls-exportall"><a href="javascript:void(0);" id="button_exportall_slider"><span class="tls-main-metas"><span class="tls-new-icon-wrapper"><i class="slider_list_add_buttons  exportall_icon"></i></span><span class="tls-title-wrapper"><span class="tls-title">Export All Sliders</span></span></span></a></li>');
		
		// then add it into container buttons
		relist.append( new_button );

		if ( !export_status.get(0) ) { // if button does not exists, just create it
			export_status = $('<li class="status-exportall"></li>');
			// then add into end of button list
			relist.append( export_status );
		}
		
		//assign event for export button
		new_button.on( 'click', function(e) {
			// add the status export working
			export_status.html("Exporting...");
			// then show status
			export_status.animate({opacity: 1}, {queue: false,duration: 100});
			
			// get all export buttons of all sliders
			var list_btns = $(".export_slider_overview");
			// then go through each slider
			list_btns.each( function (index){
				// each event happend after previous 1,5 seconds
				$(this).delay(1500*index).queue(function() {
					// bind click event for export link
					$(this).trigger('click').dequeue();
					
					// disable export status when reach to last slider
					if(index == list_btns.length - 1){
						export_status.html("Export finished");
						export_status.animate({opacity: 0}, {queue: false,duration: 5000});
					}
				});
			});

		});

	}

} )( jQuery );