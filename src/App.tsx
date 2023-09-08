import "./App.css";
import Button from "./Components/Button/Button";
import FormControlled from "./Components/Form/FormControlled";
import FormUncontrolled from "./Components/Form/FormUncontrolled";
import InputCheckboxUnico from "./Components/InputCheckbox/InputCheckboxUnico";
import InputCheckboxVariosArray from "./Components/InputCheckbox/InputCheckboxVariosArray";
import InputCheckboxVariosObjeto from "./Components/InputCheckbox/InputCheckboxVariosObjeto";
import InputEmail from "./Components/InputEmail/InputEmail";
import InputNumber from "./Components/InputNumber/InputNumber";
import InputNumberCustom from "./Components/InputNumber/InputNumberCustom";
import InputPassword from "./Components/InputPassword/InputPassword";
import InputPasswordToggle from "./Components/InputPassword/InputPasswordToggle";
import InputRadio from "./Components/InputRadio/InputRadio";
import InputText from "./Components/InputText/InputText";
import Label from "./Components/Label/Label";
import Select from "./Components/Select/Select";
import Textarea from "./Components/Textarea/Textarea";

function App() {
  return (
    <div className="App">
      <div className="grid">
        <InputText />
        <Button />
        <FormControlled />
        <FormUncontrolled />
        <InputCheckboxUnico />
        <InputCheckboxVariosArray />
        <InputCheckboxVariosObjeto />
        <InputNumber />
        <InputNumberCustom />
        <InputEmail />
        <InputPassword />
        <InputPasswordToggle />
        <InputRadio />
        <Label />
        <Select />
        <Textarea />
      </div>
    </div>
  );
}

export default App;
