var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
var size = 50;

context.fillStyle = 'rgba(255, 166, 0,0.8)';
context.fillRect(width - 160, height - 100, size,size);

context.fillStyle = 'rgba(124, 7, 62, 0.8)';
context.fillRect(width - 190, height - 80, size,size);


var canvasSecond = document.getElementById('canvasSecond');
var contextSecond = canvasSecond.getContext('2d');


contextSecond.beginPath();
contextSecond.moveTo(0,0) ;
contextSecond.lineTo(width,height);
contextSecond.strokeStyle = 'rgb(124, 7, 62)';
contextSecond.stroke();


contextSecond.beginPath();
contextSecond.moveTo(width,0) ;
contextSecond.lineTo(0,height);
contextSecond.strokeStyle = 'rgb(124, 7, 62)';
contextSecond.stroke();


var canvasThird = document.getElementById('canvasThird');
var contextThird = canvasThird.getContext('2d');

contextThird.beginPath();
contextThird.moveTo(width / 2, 50);
contextThird.lineTo(110,100);
contextThird.strokeStyle = 'rgb(124, 7, 62)';
contextThird.stroke();

contextThird.beginPath();
contextThird.moveTo(width / 2, 50);
contextThird.lineTo(190,100);
contextThird.strokeStyle = 'rgb(124, 7, 62)';
contextThird.stroke();

contextThird.beginPath();
contextThird.moveTo(110,100 );
contextThird.lineTo(190,100);
contextThird.strokeStyle = 'rgb(124, 7, 62)';
contextThird.stroke();

