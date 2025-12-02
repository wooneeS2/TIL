function Planets({ name, rotation_period, gravity, terrain, population }) {
  return (
    <li>
      이름 : {name}
      <ul>
        <li>자전 주기: {rotation_period}</li>
        <li>중력: {gravity}</li>
        <li>지형: {terrain}</li>
        <li>인구: {parseInt(population).toLocaleString()}명</li>
      </ul>
    </li>
  );
}

export default Planets;
