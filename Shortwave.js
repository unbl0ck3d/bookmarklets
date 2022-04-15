//Shortwave
//Allows you to use shortcuts to get to pages.

//This bookmarklet has a website. I strongly encourage you to visit it to use this bookmarklet to its full effect.
//Credit nitroyeast.dev
javascript:SISW();function SISW(){var t=window.getSelection?window.getSelection():(document.getSelection?document.getSelection():(document.selection?document.selection.createRange().text:''));var c=window.prompt('Type `help` for a list of commands:');if(t!=''){if(c){c+=' '+t;}else{c=''+t;};};if(c){var u='http://shortwaveapp.com/?go&c='+c+'&t='+(document.title?encodeURI(document.title):'')+'&s=http://';if(c.substring(0,1)==' '){var w=window.open(u);w.focus();}else{window.location.href=u;};};};
      
