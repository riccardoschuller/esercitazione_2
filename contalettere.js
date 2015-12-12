function countLetters(a){
if (typeof a == "string") {
	var cont = 0;
	var i = 0

	
	while(i < a.length){
	console.log(a.charAt(i));
	
	if (a.charAt(i) == "e" || a.charAt(i) == "E"){
		cont++;
	}
		i++
		}
		alert(cont)

};
}