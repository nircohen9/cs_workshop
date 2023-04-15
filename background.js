// Define the URL of the WebSocket server
const serverURL = "ws://localhost:8000";

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
  socket.send("edit schema is been clicked");

});


// // Code in your Chrome extension

// // Define the URL you want to send the message to
// const serverURL = "http://localhost:8000";

// // Define the data you want to send
// const messageData = {
//   message: "Hello, server!"
// };

// // Create a POST request using fetch
// fetch(serverURL, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(messageData)
// })
// .then(response => {
//   if (response.ok) {
//     console.log("Message sent successfully!");
//   } else {
//     console.log("Failed to send message.");
//   }
// })
// .catch(error => {
//   console.error("An error occurred while sending the message:", error);
// });





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