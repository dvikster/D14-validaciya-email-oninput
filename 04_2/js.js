document.querySelector('#email').oninput = function(){
	// var email = document.querySelector('#email');
	console.log( checkEmail(this) );
}

function checkEmail(email){
	str = email.value;
	var errors_symbol =[';', '#', ')', ' '];
	for (var i=0; i<errors_symbol.length; i++){
		if (str.indexOf(errors_symbol[i])!=-1) {
			email.classList.add('errors');
			return false;
		}
	}
	var pos = str.indexOf('@');
	if (pos<=0 || pos==str.length-1) {
		email.classList.add('errors');
		return false;
	}
	if (str.indexOf('@', pos+1)>0) {
		email.classList.add('errors');
		return false;
	}

	email.classList.remove('errors');
	return true;
}