/*
	fonksiyonların başında yazının aralarına boşluk bırakma sebebim: 
	Mesela 'çömelmek' kelimesinde yan yana bulunan 'ç' ve 'ö' harfi var. 
	Javascript ile çoklu replace yaparken yan yana gelen türkçe karakterleri %0.1 olasılık ile yapmıyor.
	Bu olasılık ile karşılaştığım için kelimelerin arasına boşluklar bıraktım ve daha sonra return ederken bu boşlukları sildim.
		
*/


//yazı karakterlerini küçük harflere dönüştürür.
String.prototype.turkishToLower = function () {
	let string = this;
	let newString="";
	for(let i = 0; i<string.length; i++){
		newString+=string[i]+" ";
	}
	
	let letters = { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" };
	newString = newString.replace(/(([İIŞĞÜÇÖ]))+/g, function (letter) { return letters[letter]; });
	
	string="";
	for(let i = 0; i<newString.length; i++)
		string+=(i==0 || i%2==0)? newString[i] : "";
	
	return string.toLowerCase();
}



//küçük türkçe karakterleride ingilizce karakterlere çevirir.
String.prototype.advancedStr = function () {
	let string = this;
	let newString="";
	for(let i = 0; i<string.length; i++){
		newString+=string[i]+" ";
	}
	
	let letters = { "ı": "i", "ğ": "g", "ü": "u", "ş": "s", "ö": "o", "ç": "c" };
	newString = newString.replace(/(([ığüşöç]))/g, function (letter) { return letters[letter]; })
	
	string="";
	for(let i = 0; i<newString.length; i++)
		string+=(i==0 || i%2==0)? newString[i] : "";
	
	return string;
}

let txt = "YAZMAK İSTEDİĞİNİZ METİN".turkishToLower().advancedStr();  	//yazmak istediginiz metin
let txt = "YAZMAK İSTEDİĞİNİZ METİN".turkishToLower();  				//yazmak istediğiniz metin
