import "./App.css";
import Navbar from "./Navbar";
import Foobar from "./Foobar";
import BodyMe from "./BodyMe";
import Projects from "./Projects";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  BrowserRouter,
  Switch,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "./About";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* <div>
        <Navbar />
      </div> */}
      {/* <AnimatePresence>
        <BrowserRouter>
          <Switch location={location} key={location.key}>
            <Route path="/" exact component={BodyMe} />

            <Route path="/project" exact component={Projects} />

            <Route component={Projects} />

          </Switch>
        </BrowserRouter>
      </AnimatePresence> */}

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/project">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <BodyMe />
          </Route>
        </Switch>
      </AnimatePresence>

      {/* <div>
        <Foobar />
      </div> */}
    </div>
  );
}

export default App;
