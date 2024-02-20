import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1 className="text-5xl text-center">{heading}</h1>
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
