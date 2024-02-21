import { useState } from "react";
function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Subrata",
    },
  });
  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Mondal" } });
    console.log(game);
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
