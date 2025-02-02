# Polmask - Political Content Masker

This project is a browser extension that helps users avoid political content on the web by masking it. Users can configure which websites the extension operates on by modifying domains using the extension options page.
**Currently this works on FIREFOX ONLY**

---

## Features

- **Mask Political Content:** Automatically hides political content.
- **Customizable:** Adjust the extension to work on different websites by adding/removing domains on the options page.
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
   - Once installed, the extension will not mask content until you add domains with the "options" page

2. **Adjust Configuration:**
   - Click on manage extension.
   - Click on options to add or remove domains where you would like the political content blocked
   - Example: "reddit.com" or "facebook.com"
     ```

---

## Development

1. **Prerequisites:**
   - Not much, it's pretty simple

2. **Folder Structure:**
   ```
   polmask/
   |-- manifest.json
   |-- polmask.js
   |-- README.md
   |-- polmask_icon.png
   |-- options.html
   |-- options.js
   ```

3. **Key Files:**
   - `manifest.json`: Configuration file for the extension.
   - `polmask.js`: Detects political keywords and masks content.
   - `README.md`: You are reading this right now.
   - `polmask_icon.png`: Icon for extension.
   - `options.html`: Options page for configuring domains.
   - `options.js`: Handles CRUD logic for domain functionality.



