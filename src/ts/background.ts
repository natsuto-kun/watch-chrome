chrome.runtime.onMessage.addListener(function(request: any, sendResponse: any) {
    console.log("this is recieve background")

    sendResponse("uooo");

    console.log(request);
    console.log(request.tab);
    console.log(saveTab);
    const checkTab = request.tab;
    if(saveTab === checkTab) {
        console.log("win");
        setTimeout(function(){
            location.href = "http://abehiroshi.la.coocan.jp/";
          }, 700);
    }

    return true
});

console.log("this is background")

chrome.storage.local.get(['key'], function(result: any) {
  console.log('Value currently is ' + result.key);
});
const saveTab = chrome.storage.local.get(['key']);
// const saved = await Promise.resolve(saveTab);
// console.log(saved.key)
// savePromise.then(function(v) {
//     console.log(v.key);
// })

/*    
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
*/
