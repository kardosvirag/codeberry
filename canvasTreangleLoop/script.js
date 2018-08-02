

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var space = 3;


for (var i = 1; i <= 1; i++){
    context.beginPath();
    context.moveTo(100 ,20);
    context.lineTo(70,60);
    context.strokeStyle = 'rgb(124, 7, 62';
    context.stroke();

    context.beginPath();
    context.moveTo(100,20);
    context.lineTo(130,60);
    context.strokeStyle = 'rgb(124, 7, 62';
    context.stroke();

    context.beginPath();
    context.moveTo(130,60);
    context.lineTo(70,60);
    context.strokeStyle = 'rgb(124, 7, 62';
    context.stroke();

}
