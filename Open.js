//Open
//This opens a mini website in the top right corner of your screen.

//The website to visit is customizable.
//This is very buggy and may only work on some websites.
//Size of window is customizable.
//Edit "frame.src" for website.
//Varitaions:
//Original:

javascript:var frame = document.createElement('iframe'); frame.src="https://skilstak.io"; frame.style.position="fixed"; frame.style.top="5%"; frame.style.right="0%";frame.style.height="200px";frame.style.width="275px"; frame.style.zIndex="100000"; document.body.appendChild(frame);var btn = document.createElement('button');btn.style.position="fixed";btn.style.top="5%";btn.style.right="25%";btn.zIndex="100000";btn.innerHTML="HIDE";document.body.appendChild(btn);
      
//Minecraft:

javascript:var frame = document.createElement('iframe'); frame.src="https://classic.minecraft.net"; frame.style.position="fixed"; frame.style.top="5%"; frame.style.right="0%";frame.style.height="700px";frame.style.width="750px"; frame.style.zIndex="100000"; document.body.appendChild(frame);var btn = document.createElement('button');btn.style.position="fixed";btn.style.top="5%";btn.style.right="25%";btn.zIndex="100000";btn.innerHTML="HIDE";document.body.appendChild(btn);
      
//Insanity (Game made by some kid at Skilstak)

javascript:var frame = document.createElement('iframe'); frame.src="https://insanity.netlify.com/"; frame.style.position="fixed"; frame.style.top="5%"; frame.style.right="0%";frame.style.height="575px";frame.style.width="700px"; frame.style.zIndex="100000"; document.body.appendChild(frame);var btn = document.createElement('button');btn.style.position="fixed";btn.style.top="5%";btn.style.right="25%";btn.zIndex="100000";btn.innerHTML="HIDE";document.body.appendChild(btn);
      
//Credit nitroyeast.dev