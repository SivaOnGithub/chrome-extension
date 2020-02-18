console.log('From background js');

// On app installed event listener callback
// It executes on extension reload
chrome.runtime.onInstalled.addListener(function() {
  console.log('app installed');

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: 'www.google.co.in' },
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
})