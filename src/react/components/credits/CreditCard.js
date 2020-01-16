import React from "react";

class CreditCard extends React.Component {
  state = {
    expanded: false
  };
  handleExpanderClick = () => {
    if (this.state) {
      this.setState({ expanded: false });
    } else {
      this.setState({ expanded: true });
    }
  };

  expandingInfo = () => {
    if (!this.state.expanded) {
      return (
        <React.Fragment>
          <div className="creditCardTitleLine">
            <span className="creditCardPicSmall">{this.props.engineerPic}</span>
            <span className="creditCardNameSmall">
              {this.props.engineerName}
            </span>
          </div>
          <div className="creditCardProjectRole">{this.props.projectRole}</div>
          <button
            className="creditCardExpanderButton"
            onClick={this.handleExpanderClick}
            onHover="Show more"
          >
            +
          </button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="creditCardTitleLine">
            <div className="creditCardNameLarge">{this.props.engineerName}</div>
            <div className="creditCardPicLarge">{this.props.engineerPic}</div>
          </div>
          <div className="creditCardProjectRole">{this.props.projectRole}</div>
          <div className="creditCardFurtherInformation">
              <b>Battleship responsibilities:</b> {this.props.projectResponsibilities}
              <b>Tools utilized:</b> {this.props.engineerTools}
              <b>Contact information:</b> {this.props.engineerContact}
          </div>
          <button
            className="creditCardExpanderButton"
            onClick={this.handleExpanderClick}
            onHover="Show less"
          >
            -
          </button>
        </React.Fragment>
      );
    }
  };
  render() {
    return <div className="creditCard">{this.expandingInfo}</div>;
  }
}

export default CreditCard
