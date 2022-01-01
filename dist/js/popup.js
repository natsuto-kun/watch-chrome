"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function localUrlData() {
    return __awaiter(this, void 0, void 0, function* () {
        const tabs = yield chrome.tabs.query({ active: true, currentWindow: true });
        const tab = tabs[0].url + "*";
        console.log(tabs[0].id, tab);
        yield chrome.storage.local.set({ key: tab });
        const message = {
            tab,
            id: tabs[0].id
        };
        chrome.runtime.sendMessage(message, (res) => {
            console.warn('callback', res);
        });
    });
}
window.addEventListener('load', () => {
    localUrlData();
});
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
