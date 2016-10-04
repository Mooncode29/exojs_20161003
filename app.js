// good luck !
var inputs = $('.color')
for(var i = 0; i < inputs.length; i++ ) {
	var couleur = $(inputs[i]).data('color');
	$(inputs[i]).css('background-color', couleur);
	console.log(couleur);

}
// $('input').css('background', function() {
// 	return $(this).data("color");
// });

function isChecked(){
	return $("#modify-texte").is(":checked");
}

$('.color').click(function(){
	var couleur_fond = $(this).data("color");
	console.log(!isChecked());
	if(isChecked() === false){
		console.log('false');
		$('body').css('background-color', couleur_fond);
	}
	else{
	console.log('true');
		$('.main').css('color',couleur_fond);
	}
	

});
