import { v4 } from "uuid";

const FactsStarWars = ({ facts }) => {
  return (
    <div className="listWrap">
      <table id="list" className="list">
        <thead>
          <tr>
            <th>№</th>
            <th>Факты о Star Wars</th>
          </tr>
        </thead>
        <tbody>
          {facts.map((el) => (
            <tr key={v4()}>
              <td>{el.number}</td>
              <td>{el.fact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FactsStarWars;