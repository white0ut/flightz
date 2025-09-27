# Flight UA1580 Countdown to Vancouver

A fun, animated countdown website for flight UA1580 landing in Vancouver!

## Setup

1. Update the landing time in `script.js`:
   ```javascript
   const targetDate = new Date('2025-10-01T14:00:00').getTime();
   ```
   Replace with your actual flight landing date and time.

## Running Locally

To run the countdown locally on your machine:

1. Ensure you have Node.js installed (for a simple HTTP server)

2. Install a local server (if not already installed):
   ```bash
   npm install -g http-server
   ```

3. Start the server in your project directory:
   ```bash
   http-server
   ```

4. Open your browser and navigate to `http://localhost:8080` (or the port shown in the terminal)

Alternatively, you can simply open `index.html` directly in your browser, but using a local server is recommended for proper functionality.

## Publishing to GitHub Pages

1. Create a new repository on GitHub (e.g., `flight-countdown`)

2. Initialize git in your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. Add your GitHub repository as remote:
   ```bash
   git remote add origin https://github.com/yourusername/flight-countdown.git
   ```

4. Push to GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

5. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"

6. Your site will be available at `https://yourusername.github.io/flight-countdown/`

## Features

- Real-time countdown to flight landing
- Flashy CSS animations
- Responsive design
- Fun plane animation

Enjoy your flight to Vancouver! ✈️🌲