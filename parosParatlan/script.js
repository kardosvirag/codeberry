for(i = 1; i < 21; i++){
  if (i == 10){
    console.log(i + ' a legszebb páros szám');
  }else if (i % 2 == 0){
    console.log(i + ' paros szám');
  }
  else{
    console.log(i + ' paratlan szám');
  }
}


for(i = 1; i <= 100; i++){
  if(i % 3 == 0 && i % 5 == 0){
    console.log(i + ' kutya es cica');
  }else if (i % 3 == 0){
    console.log(i + ' kutya');
  }
  else if (i % 5 == 0){
    console.log(i + ' cica');
  }
}

