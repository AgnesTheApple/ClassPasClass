



$(".plein").click(function() {
	$(".elmt").addClass("remplir");
	
});

$(".vide").click(function() {
	$(".elmt").removeClass("remplir");
	
});

$(".rond").click(function() {
	$(this).toggleClass("remplir");
});

$("#1").click(function() {
	var col = $(".row div:nth-child(1)");
	var ligne = $(".first .elmt");
	$(this).toggleClass("remplir");
	if ($(this).hasClass("remplir")) {
		ligne.toggleClass("remplir");
		col.addClass("remplir");
	} else {
		ligne.toggleClass("remplir");
		col.removeClass("remplir");
	}
	/*$(".first .elmt").toggleClass("remplir");
	$(".row div:nth-child(1)").toggleClass("remplir");*/
	
});


$("#7").click(function() {
	var col = $(".row div:nth-child(2)");
	var ligne = $(".second .elmt");
	$(this).toggleClass("remplir");
	if ($(this).hasClass("remplir")) {
		ligne.toggleClass("remplir");
		col.addClass("remplir");
	} else {
		ligne.toggleClass("remplir");
		col.removeClass("remplir");
	}
	/*$(this).toggleClass("remplir");
	$(".second .elmt").toggleClass("remplir");
	$(".row div:nth-child(2)").toggleClass("remplir");*/
});

$("#19").click(function() {
	var col = $(".row div:nth-child(4)");
	var ligne = $(".fourth .elmt");
	$(this).toggleClass("remplir");
	if ($(this).hasClass("remplir")) {
		ligne.toggleClass("remplir");
		col.addClass("remplir");
	} else {
		ligne.toggleClass("remplir");
		col.removeClass("remplir");
	}
	
	/*$(this).toggleClass("remplir");
	$(".fourth .elmt").toggleClass("remplir");
	$(".row div:nth-child(4)").toggleClass("remplir");*/
});

$("#25").click(function() {
	var col = $(".row div:nth-child(5)");
	var ligne = $(".fifth .elmt");
	$(this).toggleClass("remplir");
	if ($(this).hasClass("remplir")) {
		ligne.toggleClass("remplir");
		col.addClass("remplir");
	} else {
		ligne.toggleClass("remplir");
		col.removeClass("remplir");
	}
	
	// $(this).toggleClass("remplir");
	// $(".fifth .elmt").toggleClass("remplir");
	// $(".row div:nth-child(5)").toggleClass("remplir");
});

$("#13").click(function() {
	var col = $(".row div:nth-child(3)");
	var ligne = $(".third .elmt");
	$(this).toggleClass("remplir");
	if ($(this).hasClass("remplir")) {
		ligne.toggleClass("remplir");
		col.toggleClass("remplir");
	} else {
		ligne.toggleClass("remplir");
		col.toggleClass("remplir");
	}
	
	/*$(this).toggleClass("remplir");
	$(".third .elmt").toggleClass("remplir");
	$(".row div:nth-child(3)").toggleClass("remplir");*/
});

