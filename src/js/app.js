$(document).ready(function(){

	var $cards = $("[rel=js-cards]");
	var $reveal = $("[rel=js-reveal]");

  function loadCard(ID) {
		$.ajax("details/" + ID + ".html",{ dataType: "text" })
		.then(function(content){
			$content.html(content);
		});
	}

  function cardClicked(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();

		var ID = $(evt.target).attr("rel");
    console.log(ID);
		//loadPerson(ID);
	}

	$cards.on("click"," > [rel^=js-card-]",cardClicked);

});

/*
function init() {
		$content = $("[rel=js-carousel] > [rel=js-content]");
		$items = $content.children("[rel=js-items]");
		$left = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-left]");
		$right = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-right]");

		contentWidth = $content.width();
		itemsWidth = $items.width();
		position = 0;
		maxPosition = (itemsWidth - contentWidth);

		$left.click(scrollLeft);
		$right.click(scrollRight);

		$items.on("click","> [rel^=js-item-]",personClicked);
	}*/
