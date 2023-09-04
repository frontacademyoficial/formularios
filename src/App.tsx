import "./App.css";
import Button from "./Components/Button/Button";
import FormControlled from "./Components/Form/FormControlled";
import FormUncontrolled from "./Components/Form/FormUncontrolled";

function App() {
  return (
    <div className="App">
      <div className="grid">
        <FormUncontrolled />
        <FormControlled />
        <Button />
      </div>
    </div>
  );
}

export default App;
