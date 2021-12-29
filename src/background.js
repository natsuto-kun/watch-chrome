chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("this is recieve background")

    sendResponse("uooo");

    let selection;
    console.log(request);

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let tab = tabs[0].url + "*";
        console.log(tab);
        if(request.message == tab) {
            selection = "You shoudn't look this page"
            if(!alert("You Don't Look!")) {
                location.href = "http://abehiroshi.la.coocan.jp/";
            }
        } else {
            selection = '';
        }
    });
    // sendResponse(selection);

    return true
});

console.log("this is background")

chrome.storage.local.get(['key'], function(result) {
  console.log('Value currently is ' + result.key);
});

