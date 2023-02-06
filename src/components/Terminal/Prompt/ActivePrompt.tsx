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
      const [command, ...args] = prompt.trim().split(" ");
      const filteredArgs = args.filter((a) => a);

      if (command !== "clear") {
        setCommands([
          ...commands,
          {
            command,
            args: filteredArgs,
          },
        ]);
      } else {
        setCommands([initialState]);
      }

      setPrompt("");
    }
  };

  const handMouseClick = (_event: MouseEvent) => {
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

  useEffect(() => {
    document.getElementById("active-prompt-container")?.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div id="active-prompt-container" className="overflow-y-auto lg:max-h-160 max-h-80">
      {commands.map(({ command, args }, index) => (
        <div key={index}>
          <Prompt dirPath={dirPath} command={command} />
          {commandToJSX(command, args)}
        </div>
      ))}
      <Prompt dirPath={dirPath} command={prompt} cursor />

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
