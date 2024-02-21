import { useForm, FieldValues } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}
function Form() {
  const { register, handleSubmit, formState } = useForm<FormData>();
  console.log(formState.errors);
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action=""
      className="text-center">
      <div className="border-fuchsia-100">
        <label
          className="block"
          htmlFor="name">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="border-2 border-fuchsia-200 p-2 mx-4 rounded-lg"
        />
        {formState.errors.name?.type === "required" && (
          <p className="text-red-500">The name field is required</p>
        )}
        {formState.errors.name?.type === "minLength" && (
          <p className="text-red-500">The name must be atleast 3 letters</p>
        )}
      </div>
      <div className="border-fuchsia-100">
        <label
          className="block"
          htmlFor="age">
          Age
        </label>
        <input
          {...register("age")}
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
