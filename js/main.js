$(document).ready(function() {

	var addItem = function () {
		var add = $("input[name=item]").val();
		if(add.length != 0) {
		  $(".list").append("<li>" + add + "</li>");
		} else {
			alert("Entry needed!");
		}
	};

	$(".submit").on("click", function() {
		addItem();
	});

	$("input").keypress(function(e) {
		if(e.keyCode === 13) {
			e.preventDefault();
			addItem();
		}
	});

	$(document).on("dblclick", "li", function() {
		$(this).fadeOut('slow');
	});

	$(document).on("click", "li", function() {
		$(this).toggleClass("strike");
	});

	$('.list').sortable();

});