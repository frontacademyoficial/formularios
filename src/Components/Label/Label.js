export default function Label() {
  return (
    <div className="column-gap">
      <label htmlFor="teste">Teste Label</label>
      <input
        id="teste"
        name="teste"
        placeholder="Teste placeholder"
        type="text"
      />
    </div>
  );
}
