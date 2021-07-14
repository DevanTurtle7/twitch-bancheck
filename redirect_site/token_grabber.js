$(document).ready(function () {
    var pattern = /(?<=access_token=).+?(?=&)/;
    var accessToken = window.location.href.match(pattern)[0];

    if (accessToken != null) {
        chrome.storage.sync.set({ access_token: accessToken }, function () {
        }); 
    } else {
        console.log("Something went wrong");
    }
})