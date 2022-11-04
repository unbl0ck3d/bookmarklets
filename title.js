const strings = [pizza, fortnite, joe, fort, ejri, fjdisoj, ifodjsof, bfd];
window.onload = () => {
 let random = Math.floor(Math.random() * strings.length);
 // example with a div
  document.getElementById("my-span").innerHTML = strings[random];  
  // example with page title
  document.title = strings[random];
};