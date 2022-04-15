//Randomized Tilt
//Tilts each element at a different degree (only slightly,you wont be seeing things upside down.)

//You can use this more than once to get different tilts.
//Credit nitroyeast.dev
javascript:(function(){['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(el){el.style[prefix + 'transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';});});}())
      