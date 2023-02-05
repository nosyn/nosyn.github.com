interface PromptProps {
  dirPath?: string;
  prompt: string;
  cursor?: boolean;
}

const Prompt = ({ dirPath = "~", prompt, cursor = false }: PromptProps) => {
  return (
    <p className="text-lg">
      <span className="text-lime-300">nosyn@InnocentEvils:</span>
      <span className="text-blue-400">{dirPath}</span>
      <span className="text-blue-200">$&#32;</span>
      {prompt}
      {cursor && <span className="w-1 h-1 text-white">█</span>}
    </p>
  );
};

export default Prompt;
