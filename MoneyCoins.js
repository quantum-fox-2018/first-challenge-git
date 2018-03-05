function convertToCoin (num){
  var koin = [10000,5000,2000,1000,500,200,100,50,20,10,1];
  var hasil = [];

  for(var i = 0 ; i < koin.length ; i++){
    while(num >= koin[i]){
      hasil.push(koin[i]);
      num -= koin[i];
    }
  }
  return hasil;
}

console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));
