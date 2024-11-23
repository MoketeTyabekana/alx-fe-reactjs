export default function AddToDoForm() {
  return (
    <div>
      <form action="">
        <input
          type="text"
          id="item"
          name="item"
          placeholder="Add A List item"
        />
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
