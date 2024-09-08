# DappsOverApps Coin Adventure - Frontend

This is the frontend for the **DappsOverApps Coin Adventure**, a playful and gamified web interface where users can bestow and check their coin balance in a blockchain-based application. The UI is designed using **Tailwind CSS** and features a retro-inspired theme with animated coin icons, similar to the style of a game like Duolingo.

## Table of Contents
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [License](#license)

## Technologies
- **HTML5**
- **CSS3**
  - Tailwind CSS
  - Google Fonts (`Press Start 2P`)
- **JavaScript (ES6)**
- **Fetch API**
- **Node.js** (for backend interaction)

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/dapps-over-apps-frontend.git
cd dapps-over-apps-frontend
```

### 2. Install dependencies
This project doesn't require package installation directly for the frontend, but make sure you have a running backend API that the frontend will interact with.

### 3. Serve the frontend
You can use any local server to serve the static files. If you don't have one installed, you can use a simple HTTP server using Node.js:

```bash
npx serve .
```

Or, you can simply open the `index.html` file in your browser for development.

### 4. API Setup
Ensure that the frontend is pointing to the correct backend API by setting the `API_BASE_URL` in the `index.html` file:
```javascript
const API_BASE_URL = 'https://compression-api.onrender.com/';  // Change this to match your backend API's base URL
```

## Usage

1. **Grant Coins**: Enter a valid address into the "Hero's Address" field and click "Grant Coins" to bestow coins on that address.
2. **Reveal Balance**: Enter an address into the "Hero's Address" field and click "Reveal Balance" to check the number of coins held by the address.
3. **Coin Display**: The "Treasure Chest" will display the current coin balance with animated coin icons based on the amount.

## Features

- **Gamified UI**: Retro-inspired design with animated coin icons.
- **Responsive Design**: The interface adapts to various screen sizes.
- **Blockchain Interaction**: Allows users to grant coins and check balances through the DappsOverApps Coin contract.
- **Loading State**: Displays loading messages while interacting with the API.
- **Form Reset**: Automatically clears input fields after each successful operation.

## Project Structure

```bash
.
├── index.html        # Main HTML file
├── styles.css        # Custom styles (or inline styles in the HTML)
└── README.md         # Project documentation
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to adjust this `README.md` according to your specific project setup and any additional features you may add!
