var button = document.getElementById("button");
button.addEventListener('click', function() {
	var display = document.getElementById('aqi-display');
	var input = document.getElementById('aqi-input');
	display.innerHTML = input.value;
})