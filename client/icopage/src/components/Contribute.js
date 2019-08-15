import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import web3 from "../web3";
import ICOInstance from "../contract/ico";

class Contribute extends Component {
  state = {
    value: "",
    statusError: false,
    statusLoading: false,
    success: false,
    errorMessage: ""
  };
  async componentDidMount() {}

  onSubmit = async event => {
    event.preventDefault();
    try {
      {
        this.setState({ statusError: false, statusLoading: true });
      }
      let accounts = await web3.eth.getAccounts();
      await ICOInstance.methods.buyTokens().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether")
      });
      {
        this.setState({ statusLoading: false, success: true });
      }
    } catch (error) {
      {
        this.setState({
          errorMessage: "Error" + error.message,
          statusError: true,
          statusLoading: false,
          success: false
        });
      }
    }
  };
  render() {
    return (
      <div>
        <div className="contribute">Contribute</div>
        <div className=" contributeContainer">
          <form onSubmit={this.onSubmit}>
            <div className="buyCoins">
              <div className="amountToBuy">Amount of ether to buy:</div>
              <TextField
                value={this.state.value}
                onChange={event => this.setState({ value: event.target.value })}
              >
                {" "}
              </TextField>
              <div>{this.state.value * 125} ≈ DC </div>
              <div className="etherDC"> (1 ETH ≈ 100 + 25 (Bonus) DC) </div>
            </div>
            <div className="buttonBuy">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                value="Submit"
              >
                Buy BGC Tokens | 25% Bonus{" "}
              </Button>
            </div>
          </form>
          {this.state.statusError ? (
            <div className="flex errorMessage">
              <i className="material-icons">error_outline</i>
              <div>{this.state.errorMessage}</div>
            </div>
          ) : null}
          {this.state.statusLoading ? (
            <div className="flex loadingContainer">
              <div>
                <div className="loadingText"> Waiting For Confirmation</div>
                <div className="loadTextSub">
                  (this may take up to 30 seconds)
                </div>
              </div>
              <CircularProgress />
            </div>
          ) : null}
          {this.state.success ? (
            <div className="flex successfully">
              You successfully bought DC Coins!
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Contribute;
