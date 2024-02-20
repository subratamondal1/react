import ListGroup from "./components/ListGroup";
function App() {
  const items = ["Kolkata", "Mumbai", "Bangalore", "Pune"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}></ListGroup>
    </>
  );
}

export default App;
