import "./App.css";
import { Link, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Planets from "./components/Planets";
import PlanetDetail from "./components/PlanetDetail";
import RandomPlanet from "./components/RandomPlanet";

function App() {
  // // const [randomPlanet, setRandomPlanet] = useState([]);

  return (
    <div>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/randomplanet"> Random Planets</Link>
        </li>
      </nav>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/planets" component={Planets} />

          <Route path="/planetdetail" component={PlanetDetail} />
          <Route path="/randomplanet" component={RandomPlanet} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
