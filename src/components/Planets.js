import axios from "axios";
import PlanetDetail from "./PlanetDetail";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Planets() {
  // console.log(props);
  const [planet, setPlanet] = useState([]);

  const getPlanets = async () => {
    const urlTemp = ` https://wdi-nyc-planets-api.herokuapp.com/planets`;
    const res = await axios.get(urlTemp);
    console.log(res);
    setPlanet(res.data.planets);
  };
  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <div>
      <h1>Planets</h1>

      {planet.map((planets, index) => {
        return (
          <div>
            <p>Planet: {planets.name}</p>
            <PlanetDetail {...planets} key={index} />
          </div>
        );
      })}
    </div>
  );
}

export default Planets;
