var x = 5;
var y = 7;
var sumOfXY = x + y;


console.log(sum(x,y));
console.log(sum(2,6));
function sum (a , b){
  return a + b;
}



function sumOfSquares (x, y) {
  var xSquared = x*x;
  var ySquared = y*y;
  var sum = xSquared + ySquared;
  return sum;
};

var mySum = sumOfSquares (2, 4);
console.log(mySum);


function sumOfSquares (x, y) {
  return x*x + y*y;
};

var mySum = sumOfSquares (2, 4);
console.log(mySum);



function divOfSquares(x,y){
  return (x * x) / (y * y);
}

console.log(divOfSquares(6,2));