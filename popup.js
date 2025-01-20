document.getElementById('zoomIn').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    if (tab.url.startsWith('http') || tab.url.startsWith('https')) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) + 0.1).toString();
        }
      });
    } else {
      alert('Zooming is not supported on this page.');
    }
  });
});

document.getElementById('zoomOut').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    if (tab.url.startsWith('http') || tab.url.startsWith('https')) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) - 0.1).toString();
        }
      });
    } else {
      alert('Zooming is not supported on this page.');
    }
  });
});

document.getElementById('resetZoom').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    if (tab.url.startsWith('http') || tab.url.startsWith('https')) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          document.body.style.zoom = '1'; // Reset zoom to 100%
        }
      });
    } else {
      alert('Zooming is not supported on this page.');
    }
  });
}); 