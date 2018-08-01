
   function colorClock(){
   
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var hexColor = '#' + hours + minutes + seconds;

    if (hours < 10){
        hours = '0' + hours;
    }

    if (minutes < 10){
        minutes = '0' + minutes;
    }

    if (seconds < 10){
        seconds = '0' + seconds;
    }

    var clockFace = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').innerHTML = clockFace;
    document.getElementById('clock').style.background = hexColor;
    
    setTimeout(function() {
        colorClock();
      }, 1000);
      
   return;
}


colorClock();s