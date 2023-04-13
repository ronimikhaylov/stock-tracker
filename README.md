<b>Stock Tracker</b>
Stock Tracker is a React application that allows users to track stock prices and view historical price charts. The app fetches stock data from the IEX Cloud API and uses the Recharts library to display visually appealing and informative stock price charts. 

<b> Features </b>
1. Add stock ticker symbols to track stock prices.
2. View historical stock price charts for each tracked stock.
3. Real-time validation of entered stock ticker symbols.
4. Easy navigation between the tracked stocks list and individual stock charts.

<b> Technologies Used </b>
> React.js
> React Router
> Recharts
> Bootstrap
> IEX Cloud API

<b>Application Components</b>

The application consists of two main components:

1. StockRow
This component is responsible for displaying an individual stock's current price and the day's price change. It fetches the latest stock price and the previous day's closing price from the IEX Cloud API and calculates the dollar and percentage change. The component also conditionally applies styling to the change values based on whether they are positive or negative.The percentage change is determined by the previous day's closing price and the current price along with the dollar change. 

2. StockChart
This component displays a historical price chart for a selected stock. It fetches the stock's historical price data for the past month from the IEX Cloud API and uses the Recharts library to render a line chart of the data. The chart is responsive and adjusts its width according to the window size.

<b>Getting Started</b>

> Prerequisites
    - Node.js (>= 14.x.x)
    - NPM (>= 6.x.x)
    
> Installation
    - Clone the repository:
      git clone https://github.com/yourusername/stock-tracker.git
> Change the working directory:
    - cd stock-tracker

> Install dependencies:
    - npm install

> Update 'YOUR_IEX_API_TOKEN' with the publisher's API key from iexapis.com in the following files:
    - src/components/StockChart.js
    - src/config/iex.js

> Start the development server
    - npm start
      The application will now be running on http://localhost:3000.

> Usage
    - Enter a stock ticker symbol (e.g., AAPL for Apple Inc.) in the input field and click the "Submit" button. The entered stock will be added to the tracked stocks list on the left side of the page.

   - Click on a stock in the list to view its historical stock price chart.

    
    
    
  <img width="493" alt="Screen Shot 2023-04-12 at 4 15 19 PM" src="https://user-images.githubusercontent.com/105238029/231614844-4b9f7ba7-7c1f-4d97-96c0-68b08ae0d09e.png"> 


<img width="1397" alt="Screen Shot 2023-04-12 at 4 19 25 PM" src="https://user-images.githubusercontent.com/105238029/231614876-e4390fc2-a7a8-483c-8acb-7676f1535e0d.png">


    
