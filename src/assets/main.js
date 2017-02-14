$(function() {

$.ajax({
    url: '/hello',
    success: function(response) {
	     console.log(response);
      }
    });

});
