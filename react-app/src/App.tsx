import { useState } from "react";
function App() {
  const [tags, setTags] = useState(["Happy", "Cheerful"]);
  const handleClick = () => {
    setTags([...tags, "Exciting"]);
    console.log(tags);
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
