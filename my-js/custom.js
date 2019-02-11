$(document).ready(function () {
/* Contact us */
	
	jQuery(".form-js").submit(function () {
		var thisform = jQuery(this);
		jQuery('.required-error',thisform).remove();
		var name	= jQuery("#name").val();
		var mail	= jQuery("#email").val();
		var mobile	= jQuery("#mobile").val();
		var message	= jQuery("#message").val();
		
		var data = {'name':name,'mail':mail,'mobile':mobile, 'message':message};
		
		if (name != "" && mail != "" && mobile != "" && message != "") {
			//alert("Message is sending.....!");
			
			var width  = 450;
             var height = 250;
             
             var width2  = 250;
             var height2 = 250;
             var left   = (screen.width  - width)/2;
             var top    = (screen.height - height)/2;
             var params = 'width='+width+', height='+height;
             params += ', top='+top+', left='+left;

             
             var params2 = 'width='+width2+', height='+height2;
             params2 += ', top='+top+', left='+left;
			
			var w = window.open('','',params)
			w.document.write('Message is sending to Total Recycling...please wait.....')
			w.focus()
			setTimeout(function() {w.close();}, 3000)
			
		    
			jQuery.post("contactmail.jsp",data,function (result) {
				
				alert("Message is sent to bugfree technology...we will contact you soon.....");
				
				
				if (result == "done") {
					jQuery(".contact-alert").remove();
					
					
					jQuery("#name").val("");
					jQuery("#mail").val("");
					jQuery("#mobile").val("");
					jQuery("#message").val("");
				}
			});
		}
		return false;
	});
	

});