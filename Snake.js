//Snake
//The classic game of snake. Arrow keys to move and P to pause. If you use this on a webpage with text forms (such as Google Forms) you will no longer be able to type.

//You can change the siza of the game by changing "Q=44" in the beginning of the bookmarklet.
//Credit nitroyeast.dev
javascript:Q=44;m=b=Q*Q;a=[P=l=u=d=p=S=w=0];u=89;f=(h=j=t=(b+Q)/2)-1;(B=(D=document).body).appendChild(x=D.createElement("p"));(X=x.style).position="fixed";X.left=X.top=0;X.background="#FFF";x.innerHTML="<p></p><canvas>";v=(s=x.childNodes)[0];(s=s[1]).width=s.height=5*Q;c=s.getContext("2d"); onkeydown=onblur=F=function(e,g){g?a[f]?(w+=m,f=Math.random(l+=8)*(R=Q-2)*R|(u=0),F(f+=Q+1+2*(f/R|0),g)):F(f):0>e?(l?--l:(y=t,t=a[t]-2,F(y)),S+=(w*=0.8)/4,m=999/(u++ +10),a[h+=[-1,-Q,1,Q][d=p]]?B.removeChild(x,alert("Game Over")):(F(h),F(e,j=h),v.innerHTML=P?(setTimeout(F,50,e,0),S|0):"Press P")):-e?(y=(a[e]=e<Q|e>=Q*Q-Q|!(e%Q)|e%Q==Q-1|2*(e==h))+(e==f),e==h&&(a[j]=2+h),c.fillStyle="hsl("+99*!a[e]+","+2*m+"%,"+50*y+"%)",c.fillRect(e%Q*5,5*(e/Q|0),5,5)):isNaN(y=e.keyCode-37)|43==y?(P=y&&!P)&&F(-1): p=!P|y&-4|!(y^2^d)?p:y;return!1};for(;--b;F(b));void F(-1);