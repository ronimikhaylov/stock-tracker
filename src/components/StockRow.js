// Import necessary libraries and components
import React, { Component } from "react";
import { stock, getPreviousBusinessDay } from "../resources/stock.js";

// Define the StockRow class component
class StockRow extends Component {
  constructor(props) {
    super(props);
    // Initialize the state with default values
    this.state = {
      price: null,
      date: null,
      time: null,
      dollar_change: null,
      percent_change: null,
    };
  }

  // Define a function to set the color and symbol of the price change display
  changeStyle() {
    return {
      color: this.state.dollar_change >= 0 ? "#4caf50" : "#e53935",
      fontSize: "0.8rem",
      marginLeft: 5,
      changeSymbol: this.state.dollar_change >= 0 ? "+" : "-",
    };
  }

  // Define a function to apply the fetched data to the state
  applyData(data) {
    // Update the state with the latest price, date, and time
    this.setState({
      price: data.price,
      date: data.date,
      time: data.time,
    });

    // Get the previous business day's date
    const yesterdayFormatted = getPreviousBusinessDay();

    // Fetch the stock price from the previous business day for the given ticker
    stock.getYesterdaysClose(
      this.props.ticker,
      yesterdayFormatted,
      (yesterdayData) => {
        // Calculate the dollar change and percentage change between today's price and yesterday's price
        const dollar_change = (data.price - yesterdayData.price).toFixed(2);
        const percent_change =
          (
            ((data.price - yesterdayData.price) / yesterdayData.price) *
            100
          ).toFixed(2) + "%";

        // Update the state with the calculated dollar change and percentage change
        this.setState({
          dollar_change: parseFloat(dollar_change), // Store the value as a number
          percent_change: "(" + percent_change + ")",
        });
      }
    );
  }

  // When the component mounts, fetch the latest stock price and apply the data
  componentDidMount() {
    stock.latestPrice(this.props.ticker, this.applyData.bind(this));
  }

  // Render the StockRow component
  render() {
    // Get the appropriate style for the price change display
    const changeStyleData = this.changeStyle();
    return (
      <li className="list-group-item">
        <b>{this.props.ticker}</b> ${this.state.price}
        <span
          className="change"
          style={{
            color: changeStyleData.color,
            fontSize: changeStyleData.fontSize,
            marginLeft: changeStyleData.marginLeft,
          }}
        >
          {changeStyleData.changeSymbol}${Math.abs(this.state.dollar_change)}
          &nbsp;{this.state.percent_change}
        </span>
      </li>
    );
  }
}

export default StockRow;
