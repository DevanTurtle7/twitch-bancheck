let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(kButtonColors) {
  for (let item of kButtonColors) {
    let button = document.createElement('button');
    button.style.backgroundColor = item;
    button.addEventListener('click', function () {
      chrome.storage.sync.set({ color: item }, function () {
        console.log('color is ' + item);
      })
    });
    page.appendChild(button);
  }
}
constructOptions(kButtonColors);

$(document).ready(function () {
  console.log('ready');
  
  $('#loginButton').click(function () {
    console.log('clicked');

    let url = 'https://id.twitch.tv/oauth2/authorize?client_id=' + clientId +
    '&redirect_uri=' + redirectURI +
    '&response_type=code&scope=moderation:read';

    window.location = url;
  });
});