import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Whitepaper extends Component {
  render() {
    return (
      <div>
        <div className="whitepaper">
          <Button size="large" variant="contained" color="primary">
            <i className="material-icons">file_copy</i> <i>WHITEPAPER</i>
          </Button>
        </div>
      </div>
    );
  }
}

export default Whitepaper;
