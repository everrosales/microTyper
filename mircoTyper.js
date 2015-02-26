function microTyperHelper(target, string){
  if(!string) {string=target.innerHTML.substring(0,target.innerHTML.length -1)}
  target.innerHTML = string;
 }
function microTyper(targetId, text, speed, pause, loop) {
  target = document.getElementById(targetId);
  delay = pause;
  for(var i=0;i<text.length;i++) {
   if(target.innerHTML.length != 0 || i != 0) {
   targetLength = i === 0 ? target.innerHTML.length : text[i-1].length;
      for(var j=targetLength;j>0;j--){
        delay += speed;
        setTimeout(microTyperHelper, delay, target, false);
        } delay +=speed; }
    for(var j=0;j<text[i].length;j++){
      delay += speed;
      setTimeout(microTyperHelper, delay, target, text[i].substring(0, j+1));
    } delay += pause; }
  if(loop){setTimeout(microTyper, delay, targetId, text, speed, pause, loop)}}
