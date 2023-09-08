import { useState } from "react";

export default function InputCheckboxVariosArray() {
  const array = [
    {
      id: 1,
      name: "name1",
    },
    {
      id: 2,
      name: "name2",
    },
    {
      id: 3,
      name: "name3",
    },
  ];

  const [checked, setChecked] = useState(new Array(array.length).fill(false));

  const handleChange = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  return (
    <div>
      {array.map((item, index) => {
        return (
          <div className="row-gap" key={item.id}>
            <input
              id={item.id}
              type="checkbox"
              checked={checked[index]}
              onChange={() => handleChange(index)}
            />
            <label htmlFor={item.id}>{item.name}</label>
          </div>
        );
      })}
    </div>
  );
}
