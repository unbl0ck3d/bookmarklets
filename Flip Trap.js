//Flip Trap
//Waits around 5 seconds then, when ther is a input, flips the screen.

//The waiting period can be changed.
//Does not apply to multiple tabs.
//The flipping has an animation, unlike the one above.
//Credit nitroyeast.dev
javascript:(function(){setTimeout(function(){document.onmousemove = document.onkeypress = function(){['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){document.body.style[prefix + 'transition'] = prefix + 'transform 3s';document.body.style[prefix + 'transform'] = 'rotate(180deg)';});}}, 5000);}())
      