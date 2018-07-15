var allTurbines = 20;
var turbineCounter = 1;
var fullSpeedTurbin = 2000;
var halfSpeedTurbin = 1000;
var noWorkingTurbin = 0;
var speed = 0;


for(turbineCounter; turbineCounter <= 25; turbineCounter++){
  if(turbineCounter <= 10){
    speed += fullSpeedTurbin;
    console.log(turbineCounter + '. számú szélturbina teljes fordulaton működik,2000 MWh áramot termelve. A farm összteljesítménye jelenleg ' + speed + 'MWh.');
  }else if(turbineCounter <= 20){
    speed += halfSpeedTurbin;
    console.log(turbineCounter + '. számú szélturbina fél fordulaton működik,1000 MWh áramot termelve. A farm összteljesítménye jelenleg ' + speed + 'MWh.');
  }else if(turbineCounter <= 25){
    speed += noWorkingTurbin;
    console.log(turbineCounter + 'számú szélturbina áll, 0 MWh áramot termelve. A farm összteljesítménye jelenleg ' + speed + ' MWh.');
  }else{
       console.log('Valami varatlan törtent');
  }
}