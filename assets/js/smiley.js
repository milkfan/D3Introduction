var mySmile = document.getElementById('mySmile');
var smileCtx = mySmile.getContext('2d');
var radgrad = smileCtx.createRadialGradient(100,100,10,100,100,100);  
radgrad.addColorStop(.5, 'rgba(247,241,192,1)');  
radgrad.addColorStop(1, 'rgba(244,225,56,1)');  
// head
smileCtx.beginPath();smileCtx.fillStyle = radgrad;smileCtx.arc(100,100,99,0,Math.PI*2);
smileCtx.stroke();smileCtx.fill();
// Mouth
smileCtx.beginPath();smileCtx.moveTo(170,100);
smileCtx.arc(100,100,70,0,Math.PI);smileCtx.stroke();
// Left eye
smileCtx.beginPath();smileCtx.fillStyle = 'black';smileCtx.moveTo(60, 65);
smileCtx.arc(60,65,12,0,Math.PI*2);smileCtx.fill();
// Right eye			
smileCtx.beginPath();smileCtx.moveTo(140,65);
smileCtx.arc(140,65,12,0,Math.PI*2);smileCtx.fill();
