var email = document.querySelector('#email');
email.oninput = function(){
    x = this.value;
    var dog = '@';
    var condDog = x.match(/@/g);
    var condDogIndex = x.charAt(0);
    var foundPosDog = x.indexOf('@');
	if(condDog  && (condDog.length == 1) && (condDogIndex !== dog) && (foundPosDog !== x.length-1) ){
        email.className = 'good';

        var errors_symbol =[' ','"',')','(', '/','\\','|',':',';','#','?',',',];
        for (var i=0; i<errors_symbol.length; i++){
            if (x.indexOf(errors_symbol[i])!=-1) {
                email.className = 'error';
                return false;
            }
        }
        //или так проверка на плохие символы
        // for( i=0; i < x.length; i++){
        //     if( x[i] == ' ' || x[i] == '"' || x[i] == ')' || x[i] == '(' || x[i] == '/' || x[i] == '\\' || x[i] == '|' || x[i] == ':' || x[i] == ';' || x[i] == '#' || x[i] == '?' || x[i] == ','){
        //         email.className = 'error';
        //     }
        // }
        return true;
	}
    else {
        email.className = 'error';
        return false;
    }
}

var tel = document.querySelector('#tel');
var telNumber='';
var newtel='';

tel.onkeyup=function() {
    telNumber = this.value.split('',9);
	if (telNumber.length == 3){
		telNumber.splice(3, 0, '-');
	}
    else if (telNumber.length == 6){
    	telNumber.splice(6, 0, '-');
	}
    newtel = telNumber.join('');
    console.log(newtel);
    document.querySelector('#tel2').innerHTML = newtel;
    document.querySelector('#tel').value = newtel;
}



// var str = [4,5,4,5,6];
// str.splice(3, 0, '-');
// console.log(str);