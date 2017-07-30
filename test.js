var favicon = require('fetch-favicon').fetchFavicon;

var fav = favicon("https://www.mozilla.org/pl/firefox/new/").then((returns)=>{

console.log(returns);

});
