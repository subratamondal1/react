import { useState } from "react";

interface Props {
  children: string;
  maxCharacters?: number;
}
function ExpandableText({ children, maxCharacters = 100 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  if (children.length <= maxCharacters) {
    return <p>{children}</p>;
  }
  const text = isExpanded ? children : children.substring(0, maxCharacters);
  return (
    <p>
      {text}
      <button
        className="text-blue-700 font-semibold"
        onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "...less" : "...more"}
      </button>
    </p>
  );
}

export default ExpandableText;
