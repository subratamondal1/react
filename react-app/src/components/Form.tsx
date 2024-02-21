import { FormEvent, useState } from "react";
function Form() {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="text-center">
      <div className="border-fuchsia-100">
        <label
          className="block"
          htmlFor="name">
          Name
        </label>
        <input
          onChange={(event) => {
            setPerson({ ...person, name: event.target.value });
            console.log(person);
          }}
          value={person.name}
          id="name"
          type="text"
          className="border-2 border-fuchsia-200 p-2 mx-4 rounded-lg"
        />
      </div>
      <div className="border-fuchsia-100">
        <label
          className="block"
          htmlFor="age">
          Age
        </label>
        <input
          value={person.age}
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          id="age"
          type="number"
          className="border-2 border-fuchsia-200 p-2 mx-4 rounded-lg"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 my-2 bg-fuchsia-300 font-bold rounded-full hover:bg-fuchsia-400">
        Submit
      </button>
    </form>
  );
}

export default Form;
