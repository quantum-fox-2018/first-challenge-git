function NumericToRoman(num) {
  var roman = ["M", "D", "CD", "C", "L", "XL", "X", "IX", "V", "IV", "I"];
  var angka = [1000, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1];

  var hasil = '';
  for (var i = 0; i < angka.length; i++) {
    if (num < 1)
      return hasil;
    if (num >= angka[i]) {
      hasil = roman[i];
      return hasil + NumericToRoman(num - angka[i]);
    }
  }
}

console.log(NumericToRoman(4));
console.log(NumericToRoman(9));
console.log(NumericToRoman(23));
console.log(NumericToRoman(1453));
console.log(NumericToRoman(1646));
