import { useEffect, useState } from "react";
import Prompt from "./Prompt";

interface PromptProps {
  dirPath?: string;
}

const TEXTAREA_ID = "command-input";

const ActivePrompt = ({ dirPath = "~" }: PromptProps) => {
  const [command, setCommand] = useState<string>(" ");
  const [commands, setCommands] = useState<string[]>([]);

  const handleCommand = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommand(e.target.value);
  };

  const handleKeydownEvent = (event: KeyboardEvent) => {
    if (event.code === "Enter") {
      // do your stuff
      // setCommand("");
      console.log("hello");
      setCommands([...commands, command]);
      setCommand("");
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
    <>
      {commands.map((c, index) => (
        <Prompt key={index} dirPath={dirPath}>
          {c}
        </Prompt>
      ))}
      <Prompt dirPath={dirPath} cursor>
        {command}
      </Prompt>
      <textarea
        id={TEXTAREA_ID}
        className="opacity-0 filter-none overflow-hidden h-0 w-0"
        autoFocus
        value={command}
        onChange={handleCommand} // ... and update the state variable on any edits!
      />
    </>
  );
};

export default ActivePrompt;
