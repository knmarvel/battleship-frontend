import React from "react";
import { Link } from "react-router-dom"
import "./WaitScreen.css";
import { deleteMessage, getOldMessages } from "../../../redux/index";
import { connect, withAsyncAction } from "../../HOCs";



class WaitScreen extends React.Component {
  handleGoToCreditsClick = event => {
    
  }
  isThisAGameEndingMessage = (trueOrFalse) =>{
    if(trueOrFalse){
      return (
        <div>
         {/* <Link to="/Credits">Credits </Link>; */}
         Product Owner: <a href="https://gitlab.com/Janell ">Janell Hyuck</a>
         Design & CSS Engineers: LeighAnn Featheringill & <a href="https://gitlab.com/givond4">Givon Dickerson</a>
         Javascript, React, Redux Engineers: <a href="https://gitlab.com/And1drew">Andrew Belanger</a>, <a href="https://www.gitlab.com/chelseawhite">Chelsea White</a>, <a href="https://gitlab.com/dpdalsania">Drashti Dalsania</a>, <a href="https://gitlab.com/knmarvel">Kano Marvel</a>
         API: <a href="https://github.com/thurt">Taylor Hurt</a>

         <Link to="/">PLAY AGAIN?</Link>
       </div>
        )
    }
  }
  render() {
    return (
      <div className="waitScreen">
        <p className="waitMessage">{this.props.message}</p>
        {this.isThisAGameEndingMessage(this.props.children)}
        {/* <button onClick={this.deleteOldMessages}>deleteOldMessages</button> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.auth.login.result) {
    return {
      playerName: state.auth.login.result.username,
      token: state.auth.login.result.token
    };
  } else return {};
};

const mapDispatchToProps = {
  // checkReadyStart,
  deleteMessage,
  getOldMessages
  // startGame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAsyncAction("auth", "login")(WaitScreen));

// export default WaitScreen;
