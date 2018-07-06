$(document).ready(function(){

	$('.irarriba').click(function(){   /*Accede a la clase .irarriba y cuando reciba un click, se ejecutará la función*/
		$('body, html').animate({ /*Se redirige al body del html*/
			scrollTop: '0px'  /*Cuando se hace click en .irarriba hace sroll hasta el top de la página*/
		}, 300); /*Tiempo en el cual va a ir hasta arriba*/
	});

	$(window).scroll(function(){ /*Cuando se hace scroll se ejecuta una función*/
		if( $(this).scrollTop() > 100){  /*Si la cantidad de pixeles desde el top de la pantalla es mayor a 100 se ejecuta la función*/
			$('.irarriba').slideDown(300);

		} else {
			$('.irarriba').slideUp(300);
		}
	});
});