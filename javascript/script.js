var a = prompt("Inserisci la prima cifra","Inserisci qua...");
var b = prompt("Inserisci la seconda cifra","Inserisci qua...");

function sumCubes(a,b) {
	var aCube = a*a*a;
	var bCube = b*b*b;
	var result = aCube+bCube;
	return result;

};


alert(sumCubes(a,b));




var testo = prompt("Inserisci un testo","Scrivi qua...")
var lettera = prompt("Che lettera vuoi contare?")



function countLetters(){
if (typeof testo == "string") {
	var cont = 0;
	var i = 0

	
	while(i < testo.length){
	console.log(testo.charAt(i));
	
	if (testo.charAt(i) == "e" || testo.charAt(i) == "E"){
		cont++;
	}
		i++
		}
		alert(cont)

};
}