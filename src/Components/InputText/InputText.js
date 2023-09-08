import { useState } from "react";

export default function InputText() {
  const [value, setValue] = useState("");

  return (
    <div className="column-gap">
      <label htmlFor="input-text">Input Text</label>
      <input
        id="input-text"
        type="text"
        onChange={(event) => setValue(event.target.value)}
        placeholder="Input Text placeholder"
        value={value}
      />
    </div>
  );
}
