$(document).ready(function () {
    var pattern = /(?<=access_token=).+?(?=&)/;
    var accessToken = window.location.href.match(pattern)[0];

    if (accessToken != null) {
        $.ajax({
            url: 'https://id.twitch.tv/oauth2/token?client_id=' + clientId +
                '&client_secret=' + clientSecret +
                '&code=' + accessToken +
                '&grant_type=authorization_code&redirect_uri=' + redirectUri,
            type: 'POST',
            success: function(data) {
                console.log(data);
            }, error: function(data) {
                console.log('error retrieving refresh token');
            }
        });

        chrome.storage.sync.set({ access_token: accessToken }, function () {
            console.log('updated access token');
        });
    } else {
        console.log("Something went wrong");
    }
})