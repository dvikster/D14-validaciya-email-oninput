var email = document.querySelector('#email')
email.oninput = function(){
    x = this.value;
    // console.log(x);

    var dog = '@';
    var cond1 = x.match(/@/g);
    // var cond2 = x.match(/ /g);

    var cond1Ind = x.charAt(0);
    // console.log(cond2);
    // console.log(cond2 !== dog);

    var foundPos = x.indexOf(dog);
    // console.log(foundPos+1);
    // console.log(foundPos+1 !== x.length);

    // cond2 && cond3 && cond4 && cond5 && cond6
    if(cond1  && (cond1.length == 1) && (cond1Ind !== dog) && (foundPos+1 !== x.length) ){
        email.className = 'good';
        // console.log('true');
        for( i=0; i < x.length; i++){
            if( x[i] == ' ' || x[i] == '"' || x[i] == ')' || x[i] == '(' || x[i] == '/' || x[i] == '\\' || x[i] == '|' || x[i] == ':' || x[i] == ';' || x[i] == '#' || x[i] == '?'){
                email.classList.add('error');
            }

        }
        // if (cond2){
        //     if (cond2.length >= 1){
        //         email.classList.add('error');
        //     }
        // }
    }
    else {
        // console.log('false');
        email.className = 'error';
    }
}
