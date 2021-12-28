"use strict";

chrome.tabs.query({active: true}, function(tabs) {
    console.log(tabs);
});