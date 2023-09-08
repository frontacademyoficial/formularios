import { useState } from "react";

export default function Select() {
  const [value, setValue] = useState("");

  const array = [
    {
      id: 1,
      name: "Option from array 1",
    },
    {
      id: 2,
      name: "Option from array 2",
    },
    {
      id: 3,
      name: "Option from array 3",
    },
  ];

  return (
    <div className="column-gap">
      <label htmlFor="select">Select</label>
      <select
        id="select"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      >
        <option disabled value={""}>
          Selecione uma opção
        </option>
        {/* <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option> */}

        {array.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
