import { useEffect, useState } from "react";
import { commandToJSX } from "./utils";
import Prompt from "./Prompt";

export interface ActivePromptProps {
  dirPath?: string;
  initialState: ICommand;
}

export interface ICommand {
  command: string;
  args: string[];
}

const TEXTAREA_ID = "command-input";

const ActivePrompt = ({ dirPath = "~", initialState }: ActivePromptProps) => {
  const [prompt, setPrompt] = useState<string>("");
  const [commands, setCommands] = useState<ICommand[]>([initialState]);

  const handlePrompt = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleKeydownEvent = (event: KeyboardEvent) => {
    if (event.code === "Enter") {
      const [first, ...args] = prompt.trim().split(" ");
      const filteredArgs = args.filter((a) => a);

      setCommands([
        ...commands,
        {
          command: first,
          args: filteredArgs,
        },
      ]);

      setPrompt("");
    }
  };

  const handMouseClick = (event: MouseEvent) => {
    document.getElementById(TEXTAREA_ID)?.focus();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydownEvent);
    window.addEventListener("click", handMouseClick);

    return () => {
      window.removeEventListener("keydown", handleKeydownEvent);
      window.removeEventListener("click", handMouseClick);
    };
  });

  return (
    <div className="max-h-px:128pxa overflow-auto">
      {commands.map(({ command, args }, index) => (
        <div key={index}>
          <Prompt dirPath={dirPath} prompt={command} />
          {commandToJSX(command, args)}
        </div>
      ))}
      <Prompt dirPath={dirPath} prompt={prompt} cursor />

      <textarea
        id={TEXTAREA_ID}
        className="opacity-0 filter-none overflow-hidden h-0 w-0"
        autoFocus
        value={prompt}
        onChange={handlePrompt} // ... and update the state variable on any edits!
      />
    </div>
  );
};

export default ActivePrompt;
