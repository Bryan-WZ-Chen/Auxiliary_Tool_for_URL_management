chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      let currentURL = request.url;
      chrome.storage.local.get(null, function(items) {
        let keys = Object.keys(items);
        let skip = false;
        for (let key of keys) {
            if(items[key].valueOf() == currentURL.valueOf()){
              //skip this URL
              console.log("this webpage has been visited");
              skip = true;
            }
        }
        if(!skip){
            // generate a random key
            let randomKey = currentURL;
            chrome.storage.local.set({ randomKey: currentURL }, function(){
                console.log("Value is set to " + currentURL);
            });
        }
      });
            
    }
);


chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function(tab) {
        let currentURL = tab.url;
        chrome.storage.local.get(null, function(items) {
            let keys = Object.keys(items);
            let skip = false;
            for (let key of keys) {
                if(items[key].valueOf() == currentURL.valueOf()){
                    console.log("this webpage has been visited");
                    skip = true;
                }
            }
            if(!skip){
                let randomKey = currentURL;
                chrome.storage.local.set({ randomKey: currentURL }, function(){
                    console.log("Value is set to " + currentURL);
                });
            }
        });
    });
});
