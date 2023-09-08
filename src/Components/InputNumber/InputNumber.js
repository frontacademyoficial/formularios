import { useState } from "react";

export default function InputNumber() {
  const [number, setNumber] = useState("");

  return (
    <div className="column-gap">
      <label htmlFor="number">Number</label>
      <input
        id="number"
        name="number"
        onChange={(event) => {
          if (!Number.isNaN(event.target.valueAsNumber)) {
            setNumber(event.target.valueAsNumber);
          } else {
            setNumber("");
          }
        }}
        placeholder="Number placeholder"
        type="number"
        value={number}
      />
    </div>
  );
}
