chrome.browserAction.onClicked.addListener(function(tab) {
	const url = tab.url.split('//')[1];
	// chrome.tabs.create({ url: 'http://www.outline.com/' + url });
	chrome.windows.create({ "url": 'http://www.outline.com/' + url, "incognito": true });
});