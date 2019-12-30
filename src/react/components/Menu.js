import React from "react";
import { Link } from ".";
import "./Menu.css";
import { withAsyncAction } from "../HOCs";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div id="menu">
        <h1>Battleship</h1>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to = "/setup">Set Up (remove this link later)</Link>
            <Link to = "/play">PlayGame (remove this link later)</Link>
            <Link to="/" onClick={this.handleLogout}>
            <Link to="/credits">Credits</Link>
              Logout
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
