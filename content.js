console.log("Chrome extension goes!!");

/* let url = window.location.toString()
console.log("current url : " + url);

chrome.runtime.sendMessage({url: window.location.toString()}); */
chrome.runtime.sendMessage({url: window.location.href});


// check whether the URL users click is in storage
// we get all keys and compare it to the current URL
/* chrome.storage.local.get(null, function(items) {
  let keys = Object.keys(items);
  let skip = false;
  for (let key of keys) {
      if(items[key].valueOf() == url.valueOf()){
        //skip this URL
        console.log("this webpage has been visited");
        skip = true;
      }
  }
  if(!skip){
    // generate a random key
    let randomKey = Date.now();
    chrome.storage.local.set({ randomKey: url }, function(){
      console.log("Value is set to " + url);
    });
  }
});


chrome.storage.local.get(null, function(items) {
  let keys = Object.keys(items);
  for (let key of keys) {
      let savedURL = items[key].valueOf()
      console.log("savedURL: " + savedURL);
  };
}); */