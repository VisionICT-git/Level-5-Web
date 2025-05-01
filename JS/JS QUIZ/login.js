//********************** VALIDATION FOR LOGIN FORM *************************//
$('.span').hide();					//hide class span (contains the hint)

// 1. TRAVERSING
$username = $('#username');			// grabbing variables
$password = $('#password');
$submit = $('#submit');
//HIDES QUIZ AND SHOWS SIGNUP FORM
$('#quiz').hide();			// hide quiz part and shows sign up form since all on same HTML

$('#submit').click(function(e){  // when submit button is clicked hide id=login and show id=quiz section
	e.preventDefault();
	$('#login').hide();
	$('#quiz').show();
});
// 2. MANIPULATION
function val_username(){			// validate username
	if($username.val() !== ""){ 	// if username input does not equal nothing
		$username.next().hide();	//hide next(which is the span containing the message)
		return true;
	}else{
		$username.next().show();	// else show the span messgage
	}
}

function val_password(){
	if($password.val().length>=6){ 	// password validation needs 6 or more characters in length
		$password.next().hide();	// hide hint if valid
		return true;
	}else{
		$password.next().show();	//show hint is not valid
	}
}

function enableSubmit(){
	if(val_username() && val_password()){	// needs BOTH username and password to be true
		$submit.prop('disabled', false);	// disable property is false if both are valid
	}else{
		$submit.prop('disabled', true);		// disable is true is either isnt valid
	}
}
// 3. EVENTS
$username.focus(val_username).keyup(val_username).keyup(enableSubmit);	// add events to username
$password.focus(val_password).keyup(val_password).keyup(enableSubmit);	// add events to password

//HIDES QUIZ AND SHOWS SIGNUP FORM
$('#quiz').hide();			// hide quiz part and shows sign up form since all on same HTML

$('#submit').click(function(e){  // when submit button is clicked hide id=login and show id=quiz section
	e.preventDefault();
	$('#login').hide();
	$('#quiz').show();
    $('#quiz').enableSubmit();
});
