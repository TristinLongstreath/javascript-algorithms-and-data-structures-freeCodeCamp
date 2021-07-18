// Convert thr given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
    let romanNumeral = "";
  
    while (num > 0) {
      if (num < 4) {
          decrementAndAddNumeral("I", 1)
      } else if (num == 4) {
          decrementAndAddNumeral("IV", 4)
      } else if (num >= 5 && num < 9) {
          decrementAndAddNumeral("V", 5)
      } else if (num === 9) {
          decrementAndAddNumeral("IX", 9)
      } else if (num >= 10 && num <= 39) {
          decrementAndAddNumeral("X", 10)
      } else if (num >= 40 && num <= 49) {
          decrementAndAddNumeral("XL", 40)
      } else if (num >= 50 && num <= 89) {
          decrementAndAddNumeral("L", 50)
      } else if (num >= 90 && num <= 99) {
          decrementAndAddNumeral("XC", 90)
      } else if (num >= 100 && num <= 399) {
          decrementAndAddNumeral("C", 100)
      } else if (num >= 400 && num <= 499) {
          decrementAndAddNumeral("CD", 400)
      } else if (num >= 500 && num <= 899) {
          decrementAndAddNumeral("D", 500)
      } else if (num >= 900 && num <= 999) {
          decrementAndAddNumeral("CM", 900)
      } else {
          decrementAndAddNumeral("M", 1000)
      }
    }
    
    function decrementAndAddNumeral(letter, decrementAmount) {
      romanNumeral += letter;
      num -= decrementAmount;
    }
  
    return romanNumeral;
  }
  
  // convertToRoman(2) should return the string II.
  console.log(convertToRoman(2));
  // convertToRoman(3) should return the string III.
  console.log(convertToRoman(3));
  //convertToRoman(4) should return the string IV.
  console.log(convertToRoman(4));
  //convertToRoman(5) should return the string V.
  console.log(convertToRoman(5));
  //convertToRoman(9) should return the string IX.
  console.log(convertToRoman(9));
  //convertToRoman(12) should return the string XII.
  console.log(convertToRoman(12));
  //convertToRoman(16) should return the string XVI.
  console.log(convertToRoman(16));
  //convertToRoman(29) should return the string XXIX.
  console.log(convertToRoman(29));
  //convertToRoman(44) should return the string XLIV.
  console.log(convertToRoman(44));
  //convertToRoman(45) should return the string XLV.
  console.log(convertToRoman(45));
  //convertToRoman(68) should return the string LXVIII
  console.log(convertToRoman(68));
  //convertToRoman(83) should return the string LXXXIII
  console.log(convertToRoman(83));
  //convertToRoman(97) should return the string XCVII
  console.log(convertToRoman(97));
  //convertToRoman(99) should return the string XCIX
  console.log(convertToRoman(99));
  //convertToRoman(400) should return the string CD
  console.log(convertToRoman(400));
  //convertToRoman(500) should return the string D
  console.log(convertToRoman(500));
  //convertToRoman(501) should return the string DI
  console.log(convertToRoman(501));
  //convertToRoman(649) should return the string DCXLIX
  console.log(convertToRoman(649));
  //convertToRoman(798) should return the string DCCXCVIII
  console.log(convertToRoman(798));
  //convertToRoman(891) should return the string DCCCXCI
  console.log(convertToRoman(891));
  //convertToRoman(1000) should return the string M
  console.log(convertToRoman(1000));
  //convertToRoman(1004) should return the string MIV
  console.log(convertToRoman(1004));
  //convertToRoman(1006) should return the string MVI
  console.log(convertToRoman(1006));
  //convertToRoman(1023) should return the string MXXIII
  console.log(convertToRoman(1023));
  //convertToRoman(2014) should return the string MMXIV
  console.log(convertToRoman(2014));
  //convertToRoman(3999) should return the string MMMCMXCIX
  console.log(convertToRoman(3999));
  