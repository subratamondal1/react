function ListGroup() {
  const items = ["Kolkata", "Mumbai", "Bangalore", "Pune"];
  function displayMessage() {
    return <p>Another Message of Items not found but via Function</p>;
  }
  return (
    <>
      {items.length === 0 && <p>Items not found</p>}
      {items.length === 0 && displayMessage()}
      <ul className="m-8 space-y-8 rounded-lg border-2 border-fuchsia-600 p-8">
        {items.map((item) => (
          <li
            key={item}
            className="border-b-2 p-2 text-xl font-bold">
            {item.toUpperCase()}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
