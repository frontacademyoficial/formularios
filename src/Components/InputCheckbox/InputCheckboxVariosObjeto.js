import { useState } from "react";

export default function InputCheckboxVariosObjeto() {
  const array = [
    {
      id: 4,
      name: "name4",
    },
    {
      id: 5,
      name: "name5",
    },
    {
      id: 6,
      name: "name6",
    },
  ];

  const [checked, setChecked] = useState({});

  const handleChange = (id) => {
    setChecked({
      ...checked,
      [id]: !checked[id],
    });
  };

  console.log({ checked });

  return (
    <div>
      {array.map((item, index) => {
        return (
          <div className="row-gap" key={item.id}>
            <input
              id={item.id}
              type="checkbox"
              checked={checked[item.name]}
              onChange={() => handleChange(item.name)}
            />
            <label htmlFor={item.id}>{item.name}</label>
          </div>
        );
      })}
    </div>
  );
}
