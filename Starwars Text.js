//Starwars Text
//Makes the screen black and has text slide down in white text.
//Credit nitroyeast.dev
javascript:(function(j,g){var e=j.body,i=e.parentNode,c=j.createElement('MARQUEE'),f=j.createElement('AUDIO'),h=j.querySelectorAll('html *'),k=h.length;c.setAttribute('direction','up');c.setAttribute('scrollAmount','2');c.style.height='100%';c.style['-webkit-transform']='rotateX(45deg)';i.style.background='#000 url(http://furf.com/exp/starwars/background.png)';i.style.height='95%';i.style['-webkit-perspective']=200;i.style['-webkit-perspective-origin-x']='50%';i.style['-webkit-perspective-origin-y']='200px';i.insertBefore(c,e);c.appendChild(e);while(k--){g=h[k].style;g.fontFamily='arial';g.fontWeight='bold';g.background='transparent';g.color='#fc0';g.border='0';}f.src='http://furf.com/exp/starwars/star-wars.m4a';i.insertBefore(f,c);f.play();}(document));
      
