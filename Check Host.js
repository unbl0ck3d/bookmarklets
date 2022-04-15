//Check Host
//Checks the host of the website you are on.
//Credit nitroyeast.dev
javascript:(function(){if(typeof CHBookmarklet!="undefined")CHBookmarklet.start();else{var a="https://check-host.net/bookmarklet.js?"+(new Date).valueOf(),b=document.createElement("script");b.setAttribute("src",a);document.getElementsByTagName("head")[0].appendChild(b)};})();