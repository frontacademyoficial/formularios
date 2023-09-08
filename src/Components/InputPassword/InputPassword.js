import { useState } from "react";

export default function InputPassword() {
  const [value, setValue] = useState("");

  return (
    <div className="column-gap">
      <label htmlFor="password">Password</label>
      <input
        id="password"
        onChange={(event) => setValue(event.target.value)}
        placeholder="Password placeholder"
        type="password"
        value={value}
      />
    </div>
  );
}
