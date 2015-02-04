$(document).ready(function() {

	var addItem = function () {
		var add = $("input[name=item]").val();
		if(add.length !== 0) {
		  $(".list").append("<li class='item'>" + add + "</li>");
		  $("input").val("");
		  $(".error").text("");
		} else {
			$(".error").text("Invalid Entry");
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

	$(".clear").on("click", function() {
		$(".strike").remove();
		$("input").val("");
		$(".error").text("");
	});

	$(".clear-all").on("click", function() {
		$(".item").remove();
		$(".error").text("");
	});

	$(document).on("dblclick", "li", function() {
		$(this).fadeOut('slow');
	});

	$(document).on("click", "li", function() {
		$(this).toggleClass("strike");
	});

	$('.list').sortable();

});