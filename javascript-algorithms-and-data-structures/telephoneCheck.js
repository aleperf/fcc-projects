function telephoneCheck(str) {
    //only spaces
    //matches 555-555-555 | 1 555 555 555
     //const regex1 = /(1\s)?[\d]{3}[-\s]{1}[\d]{3}[\s-]{1}[\d]{4}/;
      const regex1 = /^1?\s?[\d]{3}[-\s]{1}[\d]{3}[\s-]{1}[\d]{4}/;
     //matches (555)555-5555 | (555) 555-5555 | 1 (555) 555-5555|
     //1(555)555-5555
     const regex2 = /^1?\s?[(]{1}[\d]{3}[)]{1}[\s]?[\d]{3}-[\d]{4}/ ;
     //matches 5555555555 | 1 5555555555
     const regex3 = /^1?\s?[\d]{10}$/;
     if (regex1.test(str)){
       return "matching regex1";
     } else if(regex2.test(str)){
       return "matching regex2";
     } else if (regex3.test(str)){
       return "matching regex3";
     }
     return false;
  }
  
  console.log("should return true");
  console.log("555-555-5555 " +telephoneCheck("555-555-5555"));
  console.log("1 555-555-5555 " +telephoneCheck("1 555-555-5555"));
  console.log("1 (555) 555-5555 " + telephoneCheck("1 (555) 555-5555"));
  console.log("1(555)555-5555 " + telephoneCheck("1(555)555-5555"));
  console.log("(555)555-5555 " + telephoneCheck("(555)555-5555"));
  console.log("5555555555" + telephoneCheck("5555555555"));
  console.log("1 555 555 5555 " + telephoneCheck("1 555 555 5555"));
  console.log("1 456 789 4444" + telephoneCheck("1 456 789 4444"))
  console.log("should return false");
  console.log("555-5555 " + telephoneCheck("555-5555"));
  console.log("5555555 " +telephoneCheck("5555555"));
  console.log("1 555)555-5555 "+ telephoneCheck("1 555)555-5555"));
  console.log("123**&!!asdf# " + telephoneCheck("123**&!!asdf#"));
  console.log("(6054756961) " + telephoneCheck("(6054756961)"));
  console.log("2 (757) 622-7382 " + telephoneCheck("2 (757) 622-7382"));
  console.log("0 (757) 622-7382" + telephoneCheck("0 (757) 622-7382"));
  console.log("10 (757) 622-7382" + telephoneCheck("10 (757) 622-7382"));
  console.log("27576227382 " + telephoneCheck("27576227382"));
  console.log("(275)76227382 " + telephoneCheck("(275)76227382"));
  console.log("2(757)6227382 " +telephoneCheck("2(757)6227382"));
  console.log("2(757)622-7382" + telephoneCheck("2(757)622-7382"));
  console.log("555)-555-5555 " + telephoneCheck("555)-555-5555"));
  console.log("(555)5(55?)-5555 " + telephoneCheck("(555)5(55?)-5555"))
  console.log("2 757 622-7382 " +telephoneCheck("2 757 622-7382"));
  console.log("(555-555-5555 " + telephoneCheck("(555-555-5555"));