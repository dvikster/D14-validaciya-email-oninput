document.querySelector('#t1').oninput = function(){
	var p = document.querySelector('.t1');
	p.innerHTML = this.value;
}

document.querySelector("#t2").onchange = function(){
	//console.log(this.checked);
	if (this.checked){
			console.log(this.value);
	}
}

document.querySelector('button').onclick = function(){
	var radio = document.getElementsByName('ppp');
	for (var i=0; i<radio.length; i++){
		if (radio[i].checked) {
			//console.log(radio[i].value);
			break;
		}
	}
	var select = document.querySelector('#t3');
	var s = select.selectedIndex;
	var options = document.querySelectorAll('#t3 option');
	console.log(options[s].innerHTML);
}