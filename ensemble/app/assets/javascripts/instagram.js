$(document).ready(function() {
    console.log('working')
    $('#instagram').on('click', function(){
    	console.log('clicked')
    	CLIENT-ID=
    	REDIRECT=
    	code

    	$.ajax({
    		url: '/instagram/new'
    		type: 'Get',
    		dataType: 'html',
    	})
    	.done(function() {
    		console.log("success");
    	})
    	.fail(function() {
    		console.log("error");
    	})
    	.always(function() {
    		console.log("complete");
    	});
    	
    })
});