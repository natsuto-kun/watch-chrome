async function localUrlData() {

    const tabs = await chrome.tabs.query({active: true, currentWindow: true});
    const tab = tabs[0].url + "*";
    console.log(tabs[0].id, tab)
    await chrome.storage.local.set({key: tab});
    const message = {
        tab,
        id: tabs[0].id
    }
    chrome.runtime.sendMessage(message, (res: any) => {
        console.warn('callback', res)
    })
}

window.addEventListener('load', () => {
    localUrlData()
})