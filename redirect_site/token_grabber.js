$(document).ready(function () {
    var pattern = /(?<=access_token=).+?(?=&)/;
    var accessToken = window.location.href.match(pattern)[0];

    console.log(accessToken);
    
    chrome.storage.sync.set({ access_token: 'accessToken' }, function () {
        console.log('updated access token');
    });;
})