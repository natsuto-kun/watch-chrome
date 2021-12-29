async function localUrlData() {
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     console.log("this is popup")

    //     let tab = tabs[0].url + "*";
    //     // console.log(tab);
    //     // console.log(jsonData);
    //     chrome.storage.local.set({key: tab}, function() {
    //         console.log("Value from " + tab);
    //     });
    //     chrome.storage.local.get(['key'], function(result) {
    //         console.log('Value currently is ' + result.key);
    //     });

    //     chrome.tabs.sendMessage(tabs[0].id, { message: tab }, {}, function(text) {
    //         alert(text)
    //         // console.log("this is send message");
    //         // console.log("item", item)
    //         // if (item) {
    //             console.log("success");
    //         // } else {
    //         //     alert("URLの取得に失敗しました");
    //         //     return;
    //         // }
    //         return true;
    //     });
    // });

    const tabs = await chrome.tabs.query({active: true, currentWindow: true});
    const tab = tabs[0].url + "*";
    console.log(tabs[0].id, tab)
    await chrome.storage.local.set({key: tab});
    const message = {
        tab,
        id: tabs[0].id
    }
    chrome.runtime.sendMessage(message, (res) => {
        console.warn('callback', res)
    })
}

window.addEventListener('load', () => {
    localUrlData()
})

/*
chrome.tabs.query({active: true, currentWindow: true}, aim_message);
export function aim_message(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, tabs.url, callback);
    return tabs.url;
}
function callback(text) {
    alert(text);
}
*/