import { useState } from "react";

export default function InputCheckboxUnico() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="row-gap">
      <input
        checked={isChecked}
        id="aceitar"
        name="aceitar"
        onChange={(event) => setIsChecked(event.target.checked)}
        type="checkbox"
      />
      <label htmlFor="aceitar"> Aceitar os termos de uso</label>
    </div>
  );
}
