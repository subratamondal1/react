import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div className="m-8 p-8 border-2 bg-orange-200 rounded-lg text-2xl font-bold">
      {children}
    </div>
  );
};

export default Alert;
