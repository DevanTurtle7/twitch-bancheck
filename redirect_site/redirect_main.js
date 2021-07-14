$(document).ready(function () {
    var pattern = /(?<=access_token=).+?(?=&)/;
    var accessToken = window.location.href.match(pattern)[0];

    console.log(accessToken);
})