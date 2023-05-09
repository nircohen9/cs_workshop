chrome.action.disable();

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == "complete") {
    console.log(tab.url);
    if (tab.url.indexOf("cloud.google") != -1) {
      console.log("enable");
      chrome.action.enable(tabId);
      chrome.action.setPopup({ popup: "./popup.html"})
      chrome.windows.create({
        url: chrome.runtime.getURL("popup.html"),
        type: "popup",
        top: 100,
        left: 100,
        width: 400,
        height: 600,
      });
    }
    else {
      console.log("disable");
      chrome.action.disable(tabId);
    }
  }
});