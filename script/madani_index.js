$(document).ready(function(){
	for (var i = 0; i < 10; i++) {
		var element = $(".button-" + i);
		element.click(function(){
			var elem = $(this).attr('class');
			elem = elem.substring(7,elem.length);
			alert(elem);
		});
	}
});