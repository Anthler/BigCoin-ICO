import React, { Component } from "react";

class Team extends Component {
  render() {
    return (
      <div>
        <div className="team"> Team </div>
        <div className="teamSub">
          {" "}
          Our people are our greatest asset and biggest differentiator.
        </div>
        <div className="teamSub">
          {" "}
          They also believe in having a lot of fun along the way.{" "}
        </div>

        <div className="teamPics">
          <div className="circlePic">
            <img src="https://questortech.com/wp-content/uploads/2018/07/placeholder-man.png" />
            <div className="userName"> Richard Abambillah </div>
            <div className="userText"> The CEO and bla bla, Before </div>
            <div className="userText"> Owner and ... </div>
          </div>

          <div className="circlePic">
            <img src="https://questortech.com/wp-content/uploads/2018/07/placeholder-man.png" />
            <div className="userName"> James Mainoo </div>
            <div className="userText"> The CEO and bla bla, Before </div>
            <div className="userText"> Owner and many more ... </div>
          </div>

          <div className="circlePic">
            <img src="https://questortech.com/wp-content/uploads/2018/07/placeholder-man.png" />
            <div className="userName"> Paul Aboagye </div>
            <div className="userText"> The CEO and bla bla, Before </div>
            <div className="userText"> Owner and ... </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
