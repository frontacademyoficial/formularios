import { useState } from "react";

export default function InputNumberCustom() {
  const [number, setNumber] = useState("");

  return (
    <div className="column-gap">
      <label>Number Custom</label>
      <input
        name="number-custom"
        onChange={(event) => {
          const value = event.target.value;

          if (!value || value.match(/^\d*\.?\d*$/)) {
            setNumber(value);
          }
        }}
        placeholder="Number custom placeholder"
        type="text"
        value={number}
      />
    </div>
  );
}
