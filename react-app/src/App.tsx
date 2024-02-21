import { useState } from "react";
import { produce } from "immer";
function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug1", fixed: false },
    { id: 2, title: "Bug2", fixed: false },
  ]);
  const handleClick = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find( ( bug ) => bug.id === 1 );
        if ( bug )
        {
          bug.fixed = true
        }
      })
    );
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
