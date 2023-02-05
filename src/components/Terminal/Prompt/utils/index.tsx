import WhoAmI from "../../../../components/Command/WhoAmI";
import NotFound from "../../../Command/NotFound";
import Hack from "../../../Command/Hack";

export const commandToJSX = (command: string, args?: string[]): JSX.Element => {
  switch (command) {
    case "whoami":
      return <WhoAmI />;
    case "hack":
      return <Hack />;
    default:
      return <NotFound command={command} />;
  }
};
