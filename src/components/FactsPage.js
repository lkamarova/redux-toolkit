import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import FactsStarWars from "./FactsStarWars";
import FilterFact from "./FilterFact";

const FactsPage = () => {
  const [numberInput, setNumberInput] = useState("");

  const allFacts = useSelector((state) => state.starWars.facts);

  const filteredFacts = useMemo(() => {
    if (!numberInput) {
      return allFacts;
    }
    return allFacts.filter((fact) => (fact.number <= Number(numberInput)));
  }, [numberInput, allFacts]);

  console.log("filteredFacts", filteredFacts);

  const onFilter = (value) => {
    setNumberInput(value);
  };

  return (
    <div className="listServicesWrap">
      <FilterFact value={numberInput} onChange={onFilter} />
      <FactsStarWars
        facts={filteredFacts}
      />
    </div>
  );
};

export default FactsPage;
