import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import SetUpBoard from "./SetUpBoard";
import Credits from "./Credits";
import PlayGame from "./PlayGame";

export default {
  Home: { path: "/home", component: Home },
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  SetUpBoard: { path: "/setup", component: SetUpBoard },
  PlayGame: { path: "/play", component: PlayGame },
  Credits: { path: "/credits", component: Credits },
  NotFound: { path: "/*", component: NotFound }
};
