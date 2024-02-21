import { FormEvent } from "react";
function Form() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Submitted");
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
