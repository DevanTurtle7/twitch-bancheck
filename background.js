chrome.runtime.onInstalled.addListener(function () {
	chrome.storage.sync.set({ color: '#3aa757' }, function () {
		console.log('The color is green.');
	});

	chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: { hostContains: 'twitch.tv' },
			})],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}
		]);
	});

	chrome.tabs.onUpdated.addListener(function (message, callback) {
		console.log(message);
		console.log(callback);
	});
});