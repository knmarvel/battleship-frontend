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
      <nav id="menu">
        <Link to="/">Home</Link>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/setup">Set Up (remove this link later)</Link>
            <Link to="/play">PlayGame (remove this link later)</Link>
          </div>
        )}
        <Link to="/credits">Credits</Link>
      </nav>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
