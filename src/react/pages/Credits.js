//This is our bragging page!
//Let's make it look nice :)
// include names of all group members
//give credit for what each person did
//suggestion: divide project by major items or pages,
// and list who worked on what
//important to include that the backend and HOC structure isn't ours
import React from "react";
import { Menu } from "../components";
import "./Credits.css";

class Credits extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <h4>
          Backend and HOC's adapted from "Kwitter" project skeleton, by Taylor
          Hunt, Kenzie Academy 2nd Quarter Instructor
        </h4>
        <h4>Technologies used: JavaScript, HTML, CSS, React-Redux</h4>
        <h4>The people who made this happen:</h4>
        <div id="profiles">
          <div class="individualProfiles">
            Andrew Belanger
            <br />
            How to get in touch with Andrew: <br />
            DOES HE HAVE LINKS?
          </div>
          <div>
            Drashti Dalsania
            <br />
            How to get in touch with Drashti: <br />
            <a href="https://gitlab.com/dpdalsania">GitLab</a>
          </div>
          <div>
            Givon Dickeron
            <br />
            How to get in touch with Givon: <br />
            <a href="https://www.linkedin.com/in/givondickerson/">LinkedIn</a>
            <br />
            <a href=" https://gitlab.com/givond4">GitLab</a>
            <br />
            <a href="https://www.codewars.com/users/givond4">CodeWars</a>
          </div>
          <div>
            LeighAnn Featheringill
            <br />
            How to get in touch with LeighAnn: <br />
            <a href="https://drive.google.com/file/d/1K3U1q4cI3TkTqwLVFh3G4-jB2uo4UhZf/view?usp=sharing">
              LeighAnn's Impressive Resume
            </a>
            <br />
            <a href="https://www.linkedin.com/in/leighann-featheringill/">
              LinkedIn
            </a>
          </div>
          <div>
            Janell Huyck
            <br />
            How to get in touch with Janell: <br />
            <a href="https://www.linkedin.com/in/janell-huyck-b050a05a/">
              LinkedIn
            </a>{" "}
            <br />
            <a href="https://gitlab.com/Janell">Gitlab</a>
          </div>
          <div>
            Kano Marvel
            <br />
            How to get in touch with Kano: <br />
            <a href="https://www.linkedin.com/in/karen-kano-marvel-3761b0b5/">
              LinkedIn
            </a>
            <br />
            {/* <a href="">GitLab</a>
            <br />
            <a href="">GitHub</a>
            <br /> */}
          </div>
          <div>
            Chelsea White <br />
            How to get in touch with Chelsea: <br />
            <a href="https://www.linkedin.com/in/chelsea-white-34b19735/">
              LinkedIn
            </a>
            <br />
            <a href="https://www.gitlab.com/chelseawhite">GitLab</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Credits;
