import { useState } from "react";

export default function FormControlled() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    console.log("Form submitted!", {
      name,
      email,
      password,
    });
  };

  const onReset = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form className="column-gap" onSubmit={onSubmit} onReset={onReset}>
      <input
        type="text"
        placeholder="Nome"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <div className="row-gap">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
