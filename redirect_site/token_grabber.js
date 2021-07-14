$(document).ready(function () {
    console.log(window.location.href);

    var pattern = /(?<=code=).+?(?=&)/;
    var accessToken = window.location.href.match(pattern)[0];

    if (accessToken != null) {
        let url = 'https://id.twitch.tv/oauth2/token?client_id=' + clientId +
            '&client_secret=' + clientSecret +
            '&code=' + accessToken +
            '&grant_type=authorization_code&redirect_uri=' + redirectURI;

            /*
            https://id.twitch.tv/oauth2/token?client_id=vq77nkkp8ua1wjir3xs8mkzcy434t5&client_secret=2uil42atxjgtwcnqslx74pqyvb69mm&
            code=pdrgunz5qizbgqhtvs7lj4mltglsec
            &grant_type=authorization_code&redirect_uri=https://devanturtle7.github.io/twitch-bancheck/

            pdrgunz5qizbgqhtvs7lj4mltglsec&scope=moder
            */

            console.log(url);

        $.ajax({
            url: url,
            type: 'POST',
            success: function (data) {
                console.log(data);
            }, error: function (data) {
                console.log('error retrieving refresh token');
                console.log(data);
            }
        });

        chrome.storage.sync.set({ access_token: accessToken }, function () {
            console.log('updated access token');
        });
    } else {
        console.log("Something went wrong");
    }
})