//Flip 180
//Instantly flips the screen upside down.
//Credit nitroyeast.dev
javascript:(function(){['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){document.body.style[prefix + 'transform'] = 'rotate(180deg)';});}())
      