var temp = 0;
var convertedTemp;

document.getElementsByTagName('button')[0].onclick = function convert() {
	temp = parseInt(document.getElementsByTagName('input')[0].value);
	convertedTemp = (temp * 1.8) + 32; 
	document.getElementById('display').innerHTML = convertedTemp; 
};
