function microTyperHelper(target, string){
  if(!string) {string=target.innerHTML.substring(0,target.innerHTML.length -1)}
  target.innerHTML = string;
 }
function microTyper(targetElem, text, speed, pause) {
  target = $(targetElem)[0]
  delay = speed;
  for(var i=0;i<text.length;i++) {
    if(target.innerText.length != 0) {
      for(var j=target.innerHTML.length;j>0;j--){
        delay += speed;
        setTimeout(microTyperHelper, delay, target, false);
        } delay +=speed; } 
    for(var j=0;j<text[i].length;j++){
      delay += speed;
      setTimeout(microTyperHelper, delay, target, text[i].substring(0, j+1));
    } delay += pause; }
}

