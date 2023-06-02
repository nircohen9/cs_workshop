// Define the URL of the WebSocket server
const serverURL = "ws://localhost:8000";
const message1 = 'EXPORT button clicked!'
const message2 = 'EDIT SCHEMA button clicked!'
// Create a WebSocket connection
const socket = new WebSocket(serverURL);

// Event handler for when the WebSocket connection is established
socket.onopen = function(event) {
  console.log("WebSocket connection established.");

  // Send a message to the server
  const message = "Hello, server!";
  socket.send(message);
};

// Event handler for incoming messages from the server
socket.onmessage = function(event) {
  const message = event.data;
  console.log("Received message:", message);

  // Do something with the received message in your Chrome extension
  // For example, you can display it in the extension's popup or send it to other parts of your extension.
};

// Event handler for WebSocket errors
socket.onerror = function(error) {
  console.error("WebSocket error:", error);
};

// Event handler for WebSocket connection close
socket.onclose = function(event) {
  console.log("WebSocket connection closed.");
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Button in the content script clicked!');
  if (message === message1){
    chrome.action.setPopup({ popup: "./popup_export.html"})
    chrome.windows.create({
      url: chrome.runtime.getURL("popup_export.html"),
      type: "popup",
      top: 100,
      left: 100,
      width: 400,
      height: 600,
    });
  }
  if (message === message2){
    chrome.action.setPopup({ popup: "./popup_edit_schema.html"})
    chrome.windows.create({
      url: chrome.runtime.getURL("popup_edit_schema.html"),
      type: "popup",
      top: 100,
      left: 100,
      width: 400,
      height: 600,
    });
  }
  socket.send(message);
});


// chrome.action.disable();

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (changeInfo.status == "complete") {
//     if (tab.url.indexOf("cloud.google") != -1) {
//       console.log("enable");
//       chrome.action.enable(tabId);
//       chrome.action.setPopup({ popup: "./popup.html"})
//     }
//     else {
//       console.log("disable");
//       chrome.action.disable(tabId);
//     }
//   }
// });


// Background script (background.js)


// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   console.log(tab.url);
//   if (changeInfo.status == "complete") {
//     console.log(tab.url);
//     if (tab.url.indexOf("cloud.google") != -1) {
//       console.log("enable");
//       chrome.action.enable(tabId);
//       chrome.action.setPopup({ popup: "./popup.html"})
//       chrome.windows.create({
//         url: chrome.runtime.getURL("popup.html"),
//         type: "popup",
//         top: 100,
//         left: 100,
//         width: 400,
//         height: 600,
//       });
//     }
//     else {
//       console.log("disable");
//       chrome.action.disable(tabId);
//     }
//   }
// });