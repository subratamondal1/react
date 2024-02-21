import { useState } from "react";
function App() {
  const [bugs, setBug] = useState([
    { id: 1, title: "Bug1", fixed: false },
    { id: 2, title: "Bug2", fixed: false },
  ]);
  const handleClick = () => {
    setBug(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    console.log(bugs);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="border-2 border-black px-4 py-2 m-8 rounded-full">
        Submit
      </button>
    </>
  );
}

export default App;
