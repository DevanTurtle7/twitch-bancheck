// Unique ID for the className.
var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

// Previous dom, that we want to track, so we can remove the previous styling.
var prevDOM = null;

// Mouse listener for any move event on the current document.
document.addEventListener('mousemove', function (e) {
    let target = e.target;

    if (target.classList.contains("chat-author__display-name")) {
        console.log(target.dataset.aUser);
    }
}, false);