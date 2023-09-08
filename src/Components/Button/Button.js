export default function Button() {
  return (
    <div className="column-gap">
      <button onClick={() => window.alert("onClick")}>Button onClick</button>

      <button disabled onClick={() => window.alert("onClick")}>
        Button onClick
      </button>

      <form
        className="column-gap"
        onSubmit={(event) => {
          event.preventDefault();
          window.alert("onSubmit");
        }}
      >
        <input type="text" placeholder="Nome" name="name" />

        <div className="row-gap">
          <button type="submit">Button submit</button>
          <button type="reset">Button reset</button>
        </div>
      </form>
    </div>
  );
}
