# Zoom Control Extension

This Chrome extension provides simple zoom controls directly on web pages. It allows users to zoom in, zoom out, and reset the zoom level to 100% using buttons that appear on the page.

## Features

- **Zoom In**: Increase the zoom level of the current page.
- **Zoom Out**: Decrease the zoom level of the current page.
- **Reset Zoom**: Reset the zoom level to 100%.
- **Toggle Visibility**: Use the extension icon to show or hide the zoom controls on the page.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

- Click the extension icon to toggle the visibility of the zoom controls on the current webpage.
- Use the `+` and `-` buttons to adjust the zoom level.
- Click the percentage button to reset the zoom to 100%.

## Files

- `manifest.json`: Defines the extension's metadata and permissions.
- `background.js`: Handles the extension icon click event and injects the content script.
- `content.js`: Injects zoom controls into web pages and handles zoom functionality.
- `popup.js`: (Currently not used) Can be used for additional popup functionality if needed.

## Troubleshooting

- Ensure the extension is reloaded after making changes by visiting `chrome://extensions/` and clicking "Reload" for the extension.
- If the controls do not appear, check the console for any error messages.

## License

This project is licensed under the MIT License.