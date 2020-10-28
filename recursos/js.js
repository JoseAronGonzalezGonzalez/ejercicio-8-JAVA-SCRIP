
var letras = prompt("dame una palabra palindromo: ")

alert(palindrome(letras));

function palindrome(letras) {
	var cadenaO = letras.split(' ').join('').toLowerCase();
	var cadenaR = cadenaO.split('').reverse().join('');

	if (cadenaO == cadenaR) {
		return "Es palindrome";
	}else{
		return "No es palindrome";
	}
}	
