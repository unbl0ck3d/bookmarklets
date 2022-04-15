//Dealbot
//This is a bookmarklet from a website that allows you to see deals (amazon and other online shopping.)
//Go to https://thedealbot.com/Bookmarklet for more.
//Credit nitroyeast.dev
javascript: (function() {    try {        function include(scriptUrl) {            var xmlhttp = new XMLHttpRequest();            xmlhttp.open('GET', scriptUrl);            xmlhttp.onreadystatechange = function()            {                if ((xmlhttp.status === 200) && (xmlhttp.readyState  === 4))                {                    eval(xmlhttp.responseText);                }            };            xmlhttp.send();        }        include('https://thedealbot.com/Bookmarklet/Bookmarklet.js?time=' + new Date().getTime());    } catch (e) {        console.log('Error', e);    }})();