import { useState } from "react";

export default function InputRadio() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="column-gap">
      <div className="row-gap">
        <input
          checked={selectedOption === "teste"}
          id="teste"
          onChange={(event) => setSelectedOption(event.target.value)}
          type="radio"
          value="teste"
        />
        <label htmlFor="teste">Teste Label 1</label>
      </div>

      <div className="row-gap">
        <input
          checked={selectedOption === "teste2"}
          id="teste2"
          onChange={(event) => setSelectedOption(event.target.value)}
          type="radio"
          value="teste2"
        />
        <label htmlFor="teste2">Teste Label 2</label>
      </div>

      <div className="row-gap">
        <input
          checked={selectedOption === "teste3"}
          id="teste3"
          onChange={(event) => setSelectedOption(event.target.value)}
          type="radio"
          value="teste3"
        />
        <label htmlFor="teste3">Teste Label 3</label>
      </div>
    </div>
  );
}
