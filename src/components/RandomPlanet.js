import axios from "axios";

import { useState, useEffect } from "react";

function RandomPlanet(props) {
  const [randoPlanet, setRandoPlanet] = useState([]);

  const getRandoPlanets = async () => {
    const urlTemp = ` https://wdi-nyc-planets-api.herokuapp.com/planets/random`;
    const res = await axios.get(urlTemp);
    console.log(res);
    setRandoPlanet(res.data.planet);
  };
  useEffect(() => {
    getRandoPlanets();
  }, []);

  return (
    <div>
      <h1>Random Planets</h1>
      <p> Name: {randoPlanet.name}</p>
      <p> Color of the Planet: {randoPlanet.color}</p>
      <p> Number of Moons: {randoPlanet.num_moons}</p>
      <button className="random" onClick={getRandoPlanets}>
        Random Planet{" "}
      </button>
    </div>
  );
}

export default RandomPlanet;
