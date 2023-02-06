interface PromptProps {
  dirPath?: string;
  command: string;
  cursor?: boolean;
}

const Prompt = ({ dirPath = "~", command, cursor = false }: PromptProps) => {
  return (
    <p>
      <span className="text-lime-300 dark:text-red-700">nosyn@InnocentEvils:</span>
      <span className="text-blue-400">{dirPath}</span>
      <span className="text-blue-200">$&#32;</span>
      {command}
      {cursor && <span className="w-1 h-1 text-white">█</span>}
    </p>
  );
};

export default Prompt;
