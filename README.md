# Polmask - Reddit Political Content Masker

This project is a browser extension that helps users avoid political content on Reddit by masking it. Users can configure which websites the extension operates on by modifying the `manifest.json` file.

---

## Features

- **Mask Political Content:** Automatically hides political content from Reddit.
- **Customizable:** Adjust the extension to work on different websites by modifying the `manifest.json` file.
- **Easy to Use:** Simple interface with minimal setup required.

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/polmask.git
   ```

2. **Open your browser's extension management page:**
   - For Chrome: Navigate to `chrome://extensions/`
   - For Firefox: Navigate to `about:addons`

3. **Enable developer mode:**
   - For Chrome: Toggle the "Developer mode" switch in the top right corner.
   - For Firefox: No additional action is required.

4. **Load the extension:**
   - For Chrome: Click on "Load unpacked" and select the cloned project directory.
   - For Firefox: Click on "Install Add-on From File..." and select the `manifest.json` file from the cloned project.

---

## Usage

1. **Activate the Extension:**
   - Once installed, the extension will begin masking political content on Reddit automatically.

2. **Adjust Configuration:**
   - Modify `manifest.json` to add or remove supported websites.
   - Example modification in `manifest.json`:
     ```json
     "permissions": [
         "https://www.reddit.com/*",
         "https://example.com/*"
     ]
     ```

3. **Reload the Extension:**
   - After making changes to `manifest.json`, reload the extension via the extension management page.

---

## Development

1. **Prerequisites:**
   - Node.js and npm (optional, if additional tooling is used).

2. **Folder Structure:**
   ```
   polmask/
   |-- manifest.json
   |-- polmask.js
   |-- README.md
   |-- polmask_icon.png
   ```

3. **Key Files:**
   - `manifest.json`: Configuration file for the extension.
   - `polmask.js`: Detects political keywords and masks content.
   - `README.md`: You are reading this right now.
   - `polmask_icon.png`: Icon for extension.



