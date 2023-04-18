Stock Tracker

Stock Tracker is a simple React application that allows users to track stock prices and view historical price charts. The app utilizes the IEX Cloud API to fetch stock data, and Recharts library to display stock price charts.

Features: 
1. Add stock ticker symbols to track stock prices
2. View historical stock price charts for each tracked stock
3. Real-time validation of entered stock ticker symbols
4. Easy navigation between the tracked stocks list and individual stock charts

Technologies Used: 

- React.js
- React Router
- Recharts
- Bootstrap
- IEX Cloud API

Getting Started: 
>Prerequisites:
    - Node.js (>= 14.x.x)
    - NPM (>= 6.x.x)
>Installation:
    - Clone the repository:
    git clone https://github.com/yourusername/stock-tracker.git
> Change the working directory:
    - cd stock-tracker
> Install dependencies:
    - Copy code
    - npm install
> Update 'YOUR_IEX_API_TOKEN' with the publishers api key from iexapis.com in the following files:
    - src/components/StockChart.js
    - src/config/iex.js

> Start the development server:
    - npm start
    - The application will now be running on http://localhost:3000.
> Usage
    - Enter a stock ticker symbol (e.g., AAPL for Apple Inc.) in the input field and click the "Submit" button.
    The entered stock will be added to the tracked stocks list on the left side of the page.
    Click on a stock in the list to view its historical stock price chart.