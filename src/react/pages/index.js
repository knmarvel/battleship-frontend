import Home from "./Home";
import SetUpBoard from "./SetUpBoard";
import Credits from "./Credits";
import PlayGame from "./PlayGame";

export default {
  SetUpBoard: { path: "/setup", component: SetUpBoard },
  PlayGame: { path: "/play", component: PlayGame },
  Credits: { path: "/credits", component: Credits },
  Home: { path: "/*", component: Home }
};
