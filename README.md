# microTyper

### *A simple Javascript function that allows for animated typing in Dom elements.*

microTyper is a 20 line Javascript program that allows for an automatic typing effect. Simply give it an array of text that you want it to type with a few more parameters and watch it go.

### Actual Code

```
function microTyperHelper(target, string){
  if(!string) {string=target.innerHTML.substring(0,target.innerHTML.length -1)}
  target.innerHTML = string;
 }
function microTyper(targetId, text, speed, pause, loop) {
  target = document.getElementById(targetId);
  delay = speed;
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
```

### Watch it in action on *JSFiddle*

[http://jsfiddle.net/ukha7qur/] (http://jsfiddle.net/ukha7qur/)

### How to use it?

microTyper takes in five parameters to give you more control over what you are typing: `targetId, text, speed, pause, loop`

*targetId* is the DOM element who's innerHTML will be typed in. I suggest setting targetId to a span's Id to have in line typing.

*text* is an array of text that you want microTyper to type for you. For example `text = ["type me first", "type me second", "type me third"]` will first set the target's innerHTML to `type me first`, delete it, then type `type me second` and so forth.

*speed* is the time between keystrokes in milliseconds. Making this lower will cause microTyper to start to type faster, and vice versa.

*pause* is the time you want microTyper to wait before deleting and starting to type the next element in the array in milliseconds.

*loop* is a boolean value indicating whether you want microTyper to loop typing or just go through the entire array once. `loop = true` will cause microTyper to cycle through the elements in the array forever.

### Extras

##### Want to add a blinking cursor?


Add this to your CSS:
```
.blink {
  -webkit-animation: 1s blink step-end infinite;
	-moz-animation: 1s blink step-end infinite;
	-ms-animation: 1s blink step-end infinite;
	-o-animation: 1s blink step-end infinite;
	animation: 1s blink step-end infinite;
}

@keyframes "blink" {
	from,to {
	opacity: 0;
    }
     50% {
        opacity: 1;
     }
}

@-moz-keyframes blink {
	from,to {
	opacity: 0;
    }
     50% {
       opacity: 1;
     }
}

@-webkit-keyframes "blink" {
	from,to {
	opacity: 0;
    }
     50% {
       opacity: 1;
     }
}

@-ms-keyframes "blink" {
	from,to {
	opacity: 0;
    }
     50% {
       opacity: 1;
     }
}

@-o-keyframes "blink" {
	from,to {
	opacity: 0;
    }
     50% {
       opacity: 1;
     }
}
```

And put: `<span class="blink">|</span>` in your HTML.
