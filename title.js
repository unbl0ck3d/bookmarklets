function fetchData() {
    return fetch('https://raw.githubusercontent.com/unbl0ck3d/bookmarklets/bookmarklet-storage/array.txt')
            .then(response =>
                response.text().then(text => text.split(/\r|\n/)));
        };
const strings = [fetchData().then(arr => console.log(arr))];
window.onload = () => {
 let random = Math.floor(Math.random() * strings.length);
 // example with a div
  document.getElementById("my-span").innerHTML = strings[random];  
  // example with page title
  document.title = strings[random];
};