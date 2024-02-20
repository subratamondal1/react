import Button from "./components/Button";
function App() {
  return (
    <>
      <Button onClickFunction={() => console.log("Clicked")}>Submit</Button>
    </>
  );
}

export default App;
