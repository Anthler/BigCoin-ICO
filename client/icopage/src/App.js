import React, { Component } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import Start from "./components/Start";
import About from "./components/About";
import Whitepaper from "./components/Whitepaper";
import Roadmap from "./components/Roadmap";
import Contribute from "./components/Contribute";
import Team from "./components/Team";
import scrollToComponent from "react-scroll-to-component";
import web3 from "./web3";
import ICOInstance from "./contract/ico";

class App extends Component {
  state = {
    myBalance: "",
    myEtherBalance: "",
    myAddress: ""
  };
  async componentDidMount() {
    try {
      let accounts = await web3.eth.getAccounts();
      this.setState({ myAddress: accounts[0] });
      //
      let myBalance = await ICOInstance.methods
        .myBalance()
        .call({ from: accounts[0] });
      this.setState({ myBalance });

      let myEtherBalance = await web3.eth.getBalance(accounts[0]);
      myEtherBalance = web3.utils.fromWei(myEtherBalance, "ether");
      this.setState({ myEtherBalance });
    } catch (error) {
      console.log("Something went wrong: " + error);
    }
  }
  render() {
    return (
      <div>
        <nav>
          <a href="/" className="titleICO">
            <i className="material-icons">group_work</i>
            <div>BIGCOIN ICO</div>
          </a>

          <div className="middleNav">
            <a
              onClick={() =>
                scrollToComponent(this.About, {
                  offset: -70,
                  align: "top",
                  duration: 1500
                })
              }
            >
              <Button>About</Button>
            </a>
            <a
              onClick={() =>
                scrollToComponent(this.Whitepaper, {
                  offset: -70,
                  align: "top",
                  duration: 1500
                })
              }
            >
              <Button>Whitepaper</Button>
            </a>
            <a
              onClick={() =>
                scrollToComponent(this.Roadmap, {
                  offset: -70,
                  align: "top",
                  duration: 1500
                })
              }
            >
              <Button>Roadmap</Button>
            </a>
            <a
              onClick={() =>
                scrollToComponent(this.Contribute, {
                  offset: -70,
                  align: "top",
                  duration: 1500
                })
              }
            >
              <Button>Contribute</Button>
            </a>
            <a
              onClick={() =>
                scrollToComponent(this.Team, {
                  offset: -70,
                  align: "top",
                  duration: 1500
                })
              }
            >
              <Button>Team</Button>
            </a>
          </div>

          <div className="rightNav">
            <i className="material-icons">account_box</i>

            <div className="myAccountBox">
              <div className="address"> Address: {this.state.myAddress}</div>
              <div className="eth"> ETH: {this.state.myEtherBalance} </div>
              <div className="dctoken">
                {" "}
                {"My BGC " + this.state.myBalance}{" "}
              </div>
            </div>
          </div>
        </nav>

        <div id="startDiv">
          {" "}
          <Start />{" "}
        </div>
        <div
          ref={section => {
            this.About = section;
          }}
        >
          <About />
        </div>
        <div
          ref={section => {
            this.Whitepaper = section;
          }}
        >
          {" "}
          <Whitepaper />{" "}
        </div>
        <div
          ref={section => {
            this.Roadmap = section;
          }}
        >
          {" "}
          <Roadmap />{" "}
        </div>
        <div
          ref={section => {
            this.Contribute = section;
          }}
        >
          {" "}
          <Contribute />{" "}
        </div>
        <div
          ref={section => {
            this.Team = section;
          }}
        >
          {" "}
          <Team />{" "}
        </div>
      </div>
    );
  }
}

export default App;
