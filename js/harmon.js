$(document).ready(function() {
	$(".switcher").click(function(e) {
		e.stopPropagation();
		e.preventDefault();

		var $this=$(this);
		var target=$this.attr("data-target");

		if($this.parent().hasClass("active")) return false;
		$(".switcher-target").fadeOut(200);
		window.setTimeout(function() {
			$("#switcher-target-"+target).fadeIn(200);
		},200);

		$(".switcher").parent().removeClass("active");
		$this.parent().addClass("active");
	});

	$("#knowmore").click(function() {
		$(".switcher[data-target=\"intro\"]").click();
	});

	$("#switcher-target-homepage").fadeIn(200);
});
