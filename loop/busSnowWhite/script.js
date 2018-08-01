            //  hofeherke

var totalDwarves = 7;
var dwarfCounter = 1;
var workingDwarves = 4;

while (dwarfCounter <= workingDwarves) {
  console.log("A(z) " + dwarfCounter + ". törpe a bányában.");
  dwarfCounter++;
}

for (dwarfCounter; dwarfCounter <= totalDwarves; dwarfCounter++) {
  console.log("A(z) " + dwarfCounter + ". törpe még otthon alszik.");
}


            // varosi busztarsasag

var runningBus = 10;
var outOfServicesBus = 16;
var allBuses = 20;


while (runningBus < outOfServicesBus){
    console.log(runningBus + ' szamu vonalon zavartalan a kozlekedes');
    runningBus++;
}

for(runningBus; runningBus <= allBuses; runningBus++){
    console.log(runningBus + 'szamu vonalon jelenleg nicns kozlekedes');
}