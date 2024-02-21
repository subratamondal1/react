import { useState } from "react";
function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 10 },
      { id: 2, title: "Product 2", quantity: 5 },
    ],
  });
  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
    console.log(cart);
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
