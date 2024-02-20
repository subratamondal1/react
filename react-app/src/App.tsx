import ListGroup from "./components/ListGroup";
function App() {
  const items = ["Kolkata", "Mumbai", "Bangalore", "Pune"];
  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"></ListGroup>
    </>
  );
}

export default App;
