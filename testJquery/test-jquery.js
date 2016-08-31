	$("ul").append("<li>fuck jquery!</li>");
	$("ul").on("click", function() {
		// alert("fuck you ");
		$(this).children("li").hide();

	})