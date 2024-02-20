import { useState } from "react";

function ListGroup() {
  const items = ["Kolkata", "Mumbai", "Bangalore", "Pune"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // selectedIndex; // contains the state itself (the variable)
  // setSelectedIndex; // updater function that updates the state

  return (
    <>
      <ul className="m-8 space-y-8 rounded-lg border-2 border-fuchsia-600 p-8">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              console.log(selectedIndex);
            }}
            className="border-b-2 p-2 text-xl font-bold active:bg-red-300">
            {item.toUpperCase()}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
