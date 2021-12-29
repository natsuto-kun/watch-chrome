console.log("this is content")

chrome.storage.local.get(['key'], function(result) {
  console.log('Value currently is ' + result.key);
});

/*
import { aim_message } from "./popup";

console.log(aim_message);

chrome.runtime.onMessege.addListener((request, sender, callback) => {
    console.log("受信したぞい", request.tabs.url);
    callback("おわたよ");
    return true;
});
*/
