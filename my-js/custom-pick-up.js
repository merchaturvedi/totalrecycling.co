$(document).ready(function () {

/* Pick Up */
	
	alert("");	
	jQuery(".pick-up-js").submit(function () {
		var thisform = jQuery(this);
		alert("");
		jQuery('.required-error',thisform).remove();
		/* Product Details*/
		var quantity = jQuery("qnt").val();
		var productDetials = jQuery("#pDetails").val();
		var repeat status=jQuery("#rep-status").val();
		/* User Details*/ 
		var fname	= jQuery("#fname").val();
		var lname   = jQuery("#lname").val();
		var mobile	= jQuery("#mobile").val();
		var org     = jQuery("#org").val();
		var businessType = jQuery("#business-type").val();
		var mail	= jQuery("#email").val();
		
		/*pick up details*/
		var pickaddress = jQuery("#pick-address").val();
		var contactPerson = jQuery("#contact-person").val();
		var pickTime = jQuery("#pick-time").val();
		var pickDate = jQuery("#pick-date").val();
		
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


			 //newwin=window.open('','windowname5', params);
			
			
			var w = window.open('','',params)
			w.document.write('Message is sending to Total Recycling...please wait.....')
			w.focus()
			setTimeout(function() {w.close();}, 3000)
			
		     //alert("Message is sending to bugfree technology........");
			
			
			
			
			jQuery.post("contactmail.jsp",data,function (result) {
				
				
				
				//var xx = window.open('','',params2)
				//xx.document.write('Message is sent to bugfree technology we will contact you soon........')
				//xx.focus()
				//setTimeout(function() {xx.close();}, 2000)
				
				
				
				alert("Message is sent to bugfree technology...we will contact you soon.....");
				
				
				if (result == "done") {
					jQuery(".contact-alert").remove();
					
					//thisform.prepend("<div class='alerts contact-alert'><i class='fa fa-check-circle'></i><div><h3>Thank you "+name+"!</h3><p> We'll be in touch real soon .</p></div></div>");
					
					//document.getElementById("submitmsg").innerHTML ="Your message send successfully"; 
					
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