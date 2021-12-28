import jsonData from "../manifest.json" assert { type: "json" };

chrome.tabs.query({active: true}, function(tabs) {
    console.log(tabs[0].url);
    console.log(jsonData);
});