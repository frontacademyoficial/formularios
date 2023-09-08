import { useState } from "react";

export default function Textarea() {
  const [value, setValue] = useState("");

  return (
    <div className="column-gap">
      <label htmlFor="textarea">Textarea</label>
      <textarea
        id="textarea"
        onChange={(event) => setValue(event.target.value)}
        placeholder="Textarea placeholder"
        value={value}
      />
    </div>
  );
}
