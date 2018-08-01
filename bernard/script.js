

function bernardTheLetterCounter(){
var sentence = prompt('Give me a phrase');
var letter = prompt('Which letter you wanna count?');
var letterCount = 0;

  for(var i = 0; i < sentence.length; i++){
    if(sentence.charAt(i) === letter){
      letterCount++;
    }
  }
    if (letterCount < 1){
      alert('There is no ' + letter + ' in the ' + sentence + ' sentence.');
    } else{
    alert('The letter ' + letter + ' occurs ' + letterCount + ' times in this sentence.');
  }
};

bernardTheLetterCounter();


// -------------codeberry megoldas --------------------

// function bernardTheLetterCounter () {
//   var sentence = prompt('Enter a sentence.');
//   var letter = prompt('Which letter would you like to count?');
//   var letterCount = 0;
//   for (i = 0; i <= sentence.length; i++) {
//     if (sentence.charAt(i) == letter) {
//       letterCount++;
//     };
//   };

//   alert('The letter ' + letter + ' occurs ' + letterCount + ' times in this sentence.');
//   return;
// };

// bernardTheLetterCounter();