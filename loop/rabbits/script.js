
// var number = 1;

// while (number <= 7) {
//     console.log("A(z) " + number + ". törpe a bányában.");
//     number++;
//   }


// for(dwarfCounter = 1; dwarfCounter <= 4; dwarfCounter++){
//     console.log("A(z)" + dwarfCounter + ". törpe a banyaban van.");
// }

// for(dwarfCounter = 5; dwarfCounter <= 7; dwarfCounter++){
//     console.log("A(z)" + dwarfCounter + ". otthon alszik.");
// }



var number = 30;
var month = 1;

for (month; month <= 6; month++){
    number = number * 2;
    console.log("A(z)" + month + ". honapban a nyuszik szama: " + number);
}

console.log("Fel ev utan a nyuszik szama: " + number);

for (month = 7; month <= 12; month++){
    number = number * 3;
    console.log ("A(z)" + month + ". honapban a nyuszik szama: " + number);
}

console.log("Egy ev utan a nyuszik szama: " + number);