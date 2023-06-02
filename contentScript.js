//this code works and we catch the event of edit schema. it is not efficient cuase every click the event is happened.maybe we should do this on button only.or get listener on this button in useful scenrio.
document.addEventListener('click', (event) => {
    const element = event.target;
    console.log(element)
    console.log(element.textContent)
    console.log("raz")
    if (element.textContent === " Edit schema "){
        console.log("EDIT SCHEMA BUTTON has been clicked")
        chrome.runtime.sendMessage('EDIT SCHEMA button clicked!');
    }
    if(element.textContent ===" Export "){
      console.log("EXPORT BUTTON has been clicked")
      chrome.runtime.sendMessage('EXPORT button clicked!')
    }
  });



// document.addEventListener('click', (event) => {
//     console.log(event)
//     var elementsWithRoleMenu = document.querySelectorAll('[data-test-id="export-data-btn"]');
//     if(elementsWithRoleMenu !='undefined'){
//         chrome.runtime.sendMessage({ message: 'Button clicked!' });
//     }
// });
