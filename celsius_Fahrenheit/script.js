// Marvin

// első kis robotunkat, Marvint, aki meg fogja kérdezni, hogy hány Celsius fok van éppen, és ezt átváltja nekünk Fahrenheitbe


// Celsius → Fahrenheit: (°C × 9 / 5) + 32 = °F
// Fahrenheit → Celsius: (°F − 32) x 5 / 9 = °C


// First version 


// var Temperature = prompt('Whats the temperature outside?');

// function Fahrenheit(Temperature){
//   return (Temperature * 9 / 5) + 32;
// }

// console.log('The temperature is outside ' + Fahrenheit(Temperature) + ' Fahrenheit');

// Second version 

function marvinTheConverter(){
  var celsius = prompt('What is the temperature outside, in C');
  var fahrenheit = celsius * 9 / 5 + 32;
  alert('Nice! Did you know that this is a swell ' + fahrenheit + ' degrees in Fahrenheit?');
};

marvinTheConverter();



