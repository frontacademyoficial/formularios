import { useState } from "react";

export default function InputEmail() {
  const [value, setValue] = useState("");

  return (
    <form
      className="column-gap"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label htmlFor="email">Email</label>
      <input
        id="email"
        onChange={(event) => setValue(event.target.value)}
        placeholder="Email placeholder"
        type="email"
        value={value}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
