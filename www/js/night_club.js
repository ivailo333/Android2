function generation_number() {
	let rand=Math.floor(Math.random()*100)+1;
	return rand;
}

function validation_firstname(f_name){
	let isValidate=false;
	let first_char=f_name.charAt(0);
	if((f_name.length>=3 && f_name.length<=15)&&(first_char==first_char.toUpperCase())) {
		isValidate=true;
	}
	return isValidate;
}


function validation_lastname(l_name){
	let isValidate=false;
	let first_char=l_name.charAt(0);
	if((l_name.length>=6 && l_name.length<=25)&&(first_char==first_char.toUpperCase())) {
		isValidate=true;
	}
	return isValidate;
}

function validation_age(vazrast) {
	let isValidate=false;
	if(vazrast>=18 && vazrast<=50) {
		isValidate=true;
	}
	return isValidate;
}

function validation_phone(gsm) {
	let isValidate=false;
	let first_char=gsm.charAt(0);
	let second_char=gsm.charAt(1);
	let third_char=gsm.charAt(2);
	if(gsm.length==10 && first_char=="0" && second_char=="8" && (third_char=="8" || third_char=="9" || third_char=="7")) {
		isValidate=true;
	}
	return isValidate;
}

function reserve() {
	
	let random_number=generation_number();
	let first_name=document.getElementById("fname").value;
	let validate_fname=validation_firstname(first_name);
	let last_name=document.getElementById("lname").value;
	let validate_lname=validation_lastname(last_name);
	let age=parseInt(document.getElementById("age").value);
	let validate_age=validation_age(age);
	let phone=document.getElementById("phone").value;
	let validate_phone=validation_phone(phone);
	let night_club=document.getElementById("night_club").value;
	let place=document.getElementById("place").value;
	let res_date=document.getElementById("date_reserve").value;
	
	if(validate_fname==true && validate_lname==true && validate_age==true && validate_phone==true) {
		alert("Номерът на вашата резервация е: " + random_number);
	}
	else {
		alert("Някои от полетата са попълнени неправилно.");
	}
	
	document.getElementById("fname").value="";
	document.getElementById("lname").value="";
	document.getElementById("age").value="";
	document.getElementById("phone").value="";
	document.getElementById("night_club").value="none";
	document.getElementById("place").value="0";
	document.getElementById("date_reserve").value="";
}


let reserveButton=document.getElementById("reserve");
reserveButton.addEventListener("click",reserve);