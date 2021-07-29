$(document).ready(function () {
    var pattern = /(?<=access_token=).+?(?=&)/;
    var accessToken = window.location.href.match(pattern)[0];

    if (accessToken != null) {
        chrome.storage.sync.set({ access_token: accessToken }, function () {
            console.log('access token is ' + accessToken);

            $.ajax({
                url: aws_url,
                type: 'POST',
                data: {
                    'access_token': accessToken.toString(),
                },
                success: function (data) {
                    console.log(data);
                }, error: function (data) {
                    console.log(data);
                }
            })
        });
    } else {
        console.log('Something went wrong');
    }
})