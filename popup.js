var input = document.getElementById("txt1");

input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        var newURL = "https://pub.dev/packages?q=" + document.getElementById('txt1').value;
        chrome.tabs.create({ url: newURL });
    }
})

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('button').addEventListener('click',
//     onclick, false)
//     function onclick() {
//         // console.log(document.getElementById('txt1').value);
//         var newURL = "https://pub.dev/packages?q=" + document.getElementById('txt1').value;
//             chrome.tabs.create({ url: newURL });
//         // chrome.browserAction.onClicked.addListener(function(activeTab)
//         // {
//         //     var newURL = "http://www.google.com";
//         //     chrome.tabs.create({ url: newURL });
//         // });
//     }
// });