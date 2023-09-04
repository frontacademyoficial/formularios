export default function FormUncontrolled() {
  const onSubmit = (event) => {
    event.preventDefault();

    console.log("Form submitted! event.target.input", {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    });

    const data = new FormData(event.target);

    console.log("Form submitted! FormData", {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Nome" name="name" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Senha" name="password" />
      <button type="reset">Reset</button>
      <button type="submit">Submit</button>
    </form>
  );
}
