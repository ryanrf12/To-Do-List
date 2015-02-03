$(document).ready(function() {


	$(".submit").on("click", function() {
		var add = $("input[name=item]").val();
		$("ol").append("<li>" + add + "</li>");
	});











});