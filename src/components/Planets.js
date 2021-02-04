import axios from "axios";
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
          <li key={index}>
            <Link
              to={{
                pathname: "/planetDetail",
                state: {
                  name: planets.name,
                  color: planets.color,
                  moons: planets.num_moons,
                },
              }}
            >
              {planets.name}
            </Link>
          </li>
        );
      })}
    </div>
  );
}
export default Planets;
