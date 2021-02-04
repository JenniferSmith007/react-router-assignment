function PlanetDetail(props) {
  return (
    <div>
      <h1>Planet Detail</h1>
      <p> Num of Moon : {props.location.state.moons}</p>
      <p> color: {props.location.state.color}</p>
    </div>
  );
}
export default PlanetDetail;
