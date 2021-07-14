$(document).ready(function () {
    var pattern = /(?<=access_token=).+?(?=&)/;
    var accessToken = window.location.href.match(pattern)[0];

    if (accessToken != null) {

        
    } else {
        console.log("Something went wrong");
    }
})