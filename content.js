(function() {
  if (document.getElementById('zoomControls')) return; // Prevent multiple instances

  const zoomControls = document.createElement('div');
  zoomControls.id = 'zoomControls'; // Assign an ID to the controls
  zoomControls.style.position = 'fixed';
  zoomControls.style.bottom = '20px'; // Increased margin from the bottom
  zoomControls.style.right = '20px'; // Increased margin from the right
  zoomControls.style.zIndex = '1000';
  zoomControls.style.backgroundColor = '#333';
  zoomControls.style.border = '1px solid #555';
  zoomControls.style.padding = '5px';
  zoomControls.style.borderRadius = '5px';
  zoomControls.style.color = '#ccc';
  zoomControls.style.fontSize = '14px';
  zoomControls.style.transformOrigin = 'bottom right';
  zoomControls.style.display = 'none'; // Initially hidden

  const buttonStyle = {
    backgroundColor: '#444',
    color: '#ccc',
    border: 'none',
    padding: '5px',
    borderRadius: '3px',
    width: '30px', // Consistent width for + and - buttons
    textAlign: 'center'
  };

  const zoomOutButton = document.createElement('button');
  zoomOutButton.textContent = '-';
  Object.assign(zoomOutButton.style, buttonStyle);
  zoomOutButton.onclick = () => {
    document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) - 0.1).toString();
    updateZoomLevelDisplay();
  };

  const zoomLevelButton = document.createElement('button');
  zoomLevelButton.style.backgroundColor = '#444';
  zoomLevelButton.style.color = '#ccc';
  zoomLevelButton.style.border = 'none';
  zoomLevelButton.style.padding = '5px';
  zoomLevelButton.style.borderRadius = '3px';
  zoomLevelButton.style.width = '50px'; // Fixed width for the percentage button
  zoomLevelButton.style.textAlign = 'center';
  zoomLevelButton.onclick = () => {
    document.body.style.zoom = '1';
    updateZoomLevelDisplay();
  };

  const zoomInButton = document.createElement('button');
  zoomInButton.textContent = '+';
  Object.assign(zoomInButton.style, buttonStyle);
  zoomInButton.onclick = () => {
    document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) + 0.1).toString();
    updateZoomLevelDisplay();
  };

  const updateZoomLevelDisplay = () => {
    const zoomLevel = parseFloat(document.body.style.zoom || 1);
    zoomLevelButton.textContent = `${(zoomLevel * 100).toFixed(0)}%`;
    zoomControls.style.transform = `scale(${1 / zoomLevel})`;
  };

  zoomControls.appendChild(zoomOutButton);
  zoomControls.appendChild(zoomLevelButton);
  zoomControls.appendChild(zoomInButton);
  document.body.appendChild(zoomControls);

  // Initial update to set the correct scale
  updateZoomLevelDisplay();

  // Listen for messages from the background script
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.toggleZoomControls) {
      zoomControls.style.display = zoomControls.style.display === 'none' ? 'block' : 'none';
    }
  });
})(); 