chrome.browserAction.onClicked.addListener(function(tab) {
    var chromeid = chrome.runtime.id
    var found = false
    params = {}
    chrome.tabs.query(params, function(results){
        console.log(results)
        for(var i = 0; i < results.length; i++){
            var firstsplit = (results[i].url).split("//")
            var secondsplit = firstsplit[1].split("/")
            if(chromeid == secondsplit[0]){
                found = true
                //$(".popup-button").prop('disabled', true)
                if(results[i].active == true){
                    window.close();
                } else {
                    chrome.tabs.update(results[i].id, {active: true});
                }
            }
        }
        if(!found){
            chrome.tabs.create({'url': chrome.extension.getURL('../html/tab.html')}, function(tab) {});
        }
    })
});