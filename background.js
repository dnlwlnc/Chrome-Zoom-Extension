chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  }, () => {
    chrome.tabs.sendMessage(tab.id, { toggleZoomControls: true }, (response) => {
      if (chrome.runtime.lastError) {
        console.warn("Message sending encountered an issue:", chrome.runtime.lastError.message);
      }
    });
  });
}); 