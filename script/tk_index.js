for (var i = 0; i < 10; i++) {
	var element = document.querySelector(".button-" + i);
	element.addEventListener("click", (function(n) {
		return function() {
			alert(n);
		}
	})(i);
	})
}