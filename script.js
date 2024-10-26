let inputField = document.getElementById('fname');
inputField.onblur = function (){ 
	let inputValue = inputField.value;
	inputValue = inputValue.toUpperCase();
	inputField.value = inputValue;
}
	

