$(window).bind("resize load", function(){

	if($(window).width() < 768){
		$(".list-price, .list-brands, #search-2, .list-colors, .list-sizes, .sort-choise").appendTo('.tab-content');
		$(".your-choise, .page-size").hide('fast');

	}else {
		$(".list-price, .list-brands, .list-colors, .list-sizes").appendTo('.leftside-catalog');
		$("#search-2").appendTo('.leftside-catalog');
		$(".your-choise").show('fast');
	}
});

function init () {
	var myMap = new ymaps.Map('map', {
							// При инициализации карты, обязательно нужно указать
							// ее центр и коэффициент масштабирования
							center: [55.754008, 37.620681],
							zoom: 16
						});

			// Создание метки
			var myPlacemark = new ymaps.Placemark(
			// Координаты метки
			[55.754008, 37.620681] , {
				balloonContent: 'здесь зарыты печеньки :D'}, {
					iconImageHref: 'images/marker.png',
					iconImageSize: [50, 64],
					iconImageOffset: [-50, -64],
				});
		// Добавление метки на карту
		myMap.geoObjects.add(myPlacemark);
}

$(document).ready(function(e) {

	$(".list-brands h4, .list-colors h4, .list-price h4, .list-sizes h4").on('click', function() {
		if($(window).width() < 745){
			$(this).next(".tab-content form").slideToggle("fast");
			$(this).toggleClass("active");
		}
	});

/*--- фильтр/сортировка в каталоге ---*/
	$("#filters").on('click', function() {
		if($(window).width() < 747){
			$(".list-brands h4, .list-colors h4, .list-price h4, .list-sizes h4").slideToggle("fast");
			$(".sort-choise").hide("fast");
		}
	});

	$("#sorting").on('click', function() {
		if($(window).width() < 747){
			$(".tab-content form, .tab-content h4").slideUp("fast");
			$(".sort-choise").show("fast");
			$(this).next(".sort-choise .dropdown").slideToggle("fast");
		}
	});

	$(".page-size .pagination>li").on('click', function(e) {
			$(".pagination>li").removeClass("active");
			$(this).toggleClass("active");
			e.preventDefault();
	});


/*--- главное меню ---*/
	$(".dropdown-toggle").on('click', function(e) {
		if($(window).width() < 747){
			$(this).next(".dropdown-menu").slideToggle("fast");
			$(this).toggleClass("active");
		e.preventDefault();
		}
	});

	$("button.dropdown-toggle").on('click', function() {
		$(this).next(".dropdown-menu").slideToggle("fast");
	});

	$("button.dropdown-toggle").bind("mouseleave",function(){
		$(this).removeClass("active");
	});

	$(".dropdown-menu").bind("mouseleave",function(){
		$(this).slideUp("fast");
	});

/*--- footer ---*/
	$(".submenu").on('click', function(e) {
		if($(window).width() < 747){
			$(this).next(".multi-column-dropdown").slideToggle("fast");
			$(this).toggleClass("active");
		e.preventDefault();
		}
	});

	$(".main-f").on('click', function(e) {
		if($(window).width() < 747){
			$(this).next(".footer ul").slideToggle("fast");
			$(this).toggleClass("active");
		e.preventDefault();
		}
	});

	$(".left-menu-a").on('click', function(e) {
		$(this).next(".left-submenu-ul").slideToggle("fast");
		$(this).toggleClass("active");
		e.preventDefault();
	});

	$(".left-submenu").on('click', function(e) {
		$(this).next(".left-submenu-ul ul").slideToggle("fast");
		$(this).toggleClass("active");
		e.preventDefault();
	});

	$(".deselect").on('click', function() {
		$(this).hide(500);
	});

	//Главный слайдер ()
	$("#main-slider").owlCarousel({
	 items: 1,
	 itemsDesktop: [1000, 1],
	 itemsDesktopSmall: [979,1],
	 itemsTablet: [768,1],
	 itemsMobile: [479,1],
			// Navigation
			rewindNav : true,
			navigation: true,
			navigationText: false,
			pagination: true,
			lazyLoad : true,
			lazyFollow : true,
			lazyEffect : "fade",
			//Mouse Events
			dragBeforeAnimFinish : true,
			mouseDrag : true,
			touchDrag : true
		});

	//owlCarousel со спиком брендов, accessoriesAE, alikegoods
	$("#brand-carousel, #accessoriesAE, #alikegoods").owlCarousel({
		items : 4,
		itemsDesktop: [1000, 4],
		itemsDesktopSmall: [979,3],
		itemsTablet: [768,2],
		itemsMobile: [479,1],
			// Navigation
			navigation: true,
			navigationText: false,
			rewindNav : true,
			pagination: false,
			//Lazy load
			lazyLoad : false,
			lazyFollow : false,
			lazyEffect : "fade",
		});

	//При наведении мышки .darkline становится прозрачной
	$(".gallery1-item").mouseenter(function() {
		$('.darkline', this).stop(true,true).animate({opacity: '0'}, 100);
	});

	//При отведени мышки .darkline снова становится ПОЛУпрозрачной
	$(".gallery1-item").mouseleave(function() {
		$('.darkline', this).stop(true,true).animate({opacity: '.8'}, 300);
	});

	// ymaps.ready(init);
});