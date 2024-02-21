import { useState } from "react";
function App() {
  const [customer, setCustomer] = useState({
    name: "Subrata",
    address: {
      city: "Jangipur",
      zipcode: 700018,
    },
  });
  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipcode: 742213 },
    });
    console.log(customer);
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
