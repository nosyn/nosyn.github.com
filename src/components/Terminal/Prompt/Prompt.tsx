import type { ReactNode } from "react";

interface PromptProps {
  dirPath?: string;
  children: ReactNode;
  cursor?: boolean;
}

const Prompt = ({ dirPath = "~", children, cursor = false }: PromptProps) => {
  return (
    <p className="text-lg">
      <span className="text-lime-300">nosyn@InnocentEvils:</span>
      <span className="text-blue-400">{dirPath}</span>
      <span className="text-blue-200">$ </span>
      {children}
      {cursor && <span className="w-1 h-1 text-white"> █</span>}
    </p>
  );
};

export default Prompt;
