var prevName;
var broadcasterIds = ["198704263"];
var accessToken;

$(document).ready(function () {
    $(document).mousemove(function (e) {
        let target = e.target;

        if (target.classList.contains('chat-author__display-name')) {
            let currentName = target.dataset.aUser;

            if (currentName != prevName) {
                console.log(currentName);

                // Todo: Specify the user id in the call so we don't have to sort through all banned users
                $.ajax({
                    url: 'https://api.twitch.tv/helix/moderation/banned?broadcaster_id=' + broadcasterIds[0],
                    type: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + accessToken,
                        'Client-Id': + clientId
                    },
                })
            }

            prevName = currentName;
        }
    });
});