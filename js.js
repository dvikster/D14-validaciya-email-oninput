var email = document.querySelector('#email');

email.oninput = function(){
    x = this.value;
    var dog = '@';
    var condDog = x.match(/@/g);
    var condDogIndex = x.charAt(0);
    var foundPosDog = x.indexOf(dog);
	if(condDog  && (condDog.length == 1) && (condDogIndex !== dog) && (foundPosDog+1 !== x.length) ){
        email.className = 'good';
		for( i=0; i < x.length; i++){
			if( x[i] == ' ' || x[i] == '"' || x[i] == ')' || x[i] == '(' || x[i] == '/' || x[i] == '\\' || x[i] == '|' || x[i] == ':' || x[i] == ';' || x[i] == '#' || x[i] == '?' || x[i] == ','){
                email.classList.add('error');
			}
		}
	}
    else {
        email.className = 'error';
    }
}