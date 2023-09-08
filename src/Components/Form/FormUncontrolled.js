export default function FormUncontrolled() {
  const onSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    console.log("Form submitted! event.target.input", {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    });

    console.log("Form submitted! FormData", {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <form className="column-gap" onSubmit={onSubmit}>
      <input type="text" placeholder="Nome" name="name" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Senha" name="password" />

      <div className="row-gap">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
