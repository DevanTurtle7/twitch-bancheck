var prevName;
var broadcasterIds = ["198704263"];

$(document).ready(function () {
    $(document).mousemove(function (e) {
        let target = e.target;

        if (target.classList.contains('chat-author__display-name')) {
            let currentName = target.dataset.aUser;

            if (currentName != prevName) {
                console.log(currentName);

                chrome.storage.sync.get("access_token", function (obj) {
                    console.log(obj.access_token)

                    // Todo: Specify the user id in the call so we don't have to sort through all banned users
                    $.ajax({
                        url: 'https://api.twitch.tv/helix/moderation/banned?broadcaster_id=' + broadcasterIds[0],
                        type: 'GET',
                        headers: {
                            'Authorization': 'Bearer ' + obj.access_token,
                            'Client-Id': clientId
                        }, success: function(data) {
                            console.log(data);
                        }, error: function(data) {
                            console.log(data);
                        }
                    })
                });
            }

            prevName = currentName;
        }
    });
});