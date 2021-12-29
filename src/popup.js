async function localUrlData() {

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