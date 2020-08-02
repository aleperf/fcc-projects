function palindrome(str) {
  var lower_str = str.toLowerCase()
  lower_str = lower_str.replace(/[^A-Za-z0-9]/gi, "")
  var len = lower_str.length - 1;
  for(var i = 0; i < lower_str.length; i++){
      if (lower_str[i] != lower_str[len]){
        return false;
      }
      len--;
  }
  return true;
}



console.log(palindrome("five|\_/|four"));