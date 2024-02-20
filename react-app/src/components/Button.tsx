interface Props {
  children: string;
  onClickFunction: () => void;
}
function Button({ children, onClickFunction }: Props) {
  return (
    <button
      onClick={onClickFunction}
      className="py-2 px-4 m-4 border-2 border-fuchsia-400 text-slate-950 text-2xl text-center rounded-full">
      {children}
    </button>
  );
}

export default Button;
