//Slowly Clone Page
//This slowly clones the page.

//Some elements may load better using this than the instant clone.
//Same as before edits will save even after refresh.
//For a "quick clone" use a big number such as '918237209'.
//Credit nitroyeast.dev
javascript:(function(){var y,x,e,i,speed,L; while(x=document.getElementsByTagName("script")[0])x.parentNode.removeChild(x); speed=parseInt(prompt("Print how many characters at a time?\n1 is slowest.",30)); function T(){x.write(e.substr(i,speed)); if (i<L) setTimeout(T,1); else x.close(); i+=speed; if (i>L)i=L; y.status=i+"/"+L } if (speed>0) { e=document.documentElement.innerHTML; L=e.length; i=0; y=open(); x=y.document; T(); } })()
      