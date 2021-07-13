var prevName;



$(document).ready(function () {
    $(document).mousemove(function (e) {
        let target = e.target;

        if (target.classList.contains("chat-author__display-name")) {
            let currentName = target.dataset.aUser;

            if (currentName != prevName) {
                console.log(currentName);
            }

            prevName = currentName;
        }
    });
});