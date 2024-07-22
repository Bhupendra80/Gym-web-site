function myform() {
	var name = document.forms.regForm.name.value;
	// var name = document.getElementById('name').value;
	var email = document.forms.regForm.email.value;
	// ram@gmail.com
	var address = document.forms.regForm.address.value;
	var password = document.forms.regForm.password.value;

	if(name === "" ||  name.length <= 10){
		alert("Please enter your name in more then 10 char....!")
		return false;
	}

	if(email === "" || !email.includes('@')){
		alert("Please enter valid email!")
		return false;
	}

	if(password === ""){
		alert("Please enter your password first!")
		return false;
	}

}