function convertToRoman(num) {
 
 var ones = {
   "0" :"",
   "1" : "I",
   "2" : "II",
   "3" : "III",
   "4" : "IV",
   "5" : "V",
   "6": "VI",
   "7": "VII",
   "8": "VIII",
   "9": "IX"
 }

 var tens = {
   "0" : "",
   "1": "X",
   "2": "XX",
   "3": "XXX",
   "4": "XL",
   "5": "L",
   "6": "LX",
   "7": "LXX",
   "8": "LXXX",
   "9": "XC"
 }

 var hundreds = {
   "0": "",
   "1": "C",
   "2": "CC",
   "3": "CCC",
   "4": "CD",
   "5": "D",
   "6": "DC",
   "7": "DCC",
   "8": "DCCC",
   "9": "CM"
 }

 var thousands = {
   "0": "",
   "1": "M",
   "2": "MM",
   "3": "MMM",
   "4": "V",
   "5": "D",
   "6": "DC",
   "7": "DCC",
   "8": "DCCC",
   "9": "CM"

 }
  var numString = num.toString();
  var romanNumeral = "";
  var size = numString.length;
  for (var i = 0; i < numString.length; i++){
       var currentCypher = numString[size - 1 - i];
       console.log(currentCypher)
       if (i == 0){
         console.log(ones[currentCypher]);
          romanNumeral =  ones[currentCypher] + romanNumeral;
       }
       else if (i == 1){
          romanNumeral =  tens[currentCypher] + romanNumeral;
       } else if (i == 2){
          romanNumeral =  hundreds[currentCypher] + romanNumeral;
       }
  }

  return romanNumeral;

}

console.log(convertToRoman(891));