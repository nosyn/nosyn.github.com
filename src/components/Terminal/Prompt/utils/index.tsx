import WhoAmI from "../../../../components/Command/WhoAmI";
import NotFound from "../../../Command/NotFound";
import Hack from "../../../Command/Hack";
import Theme from "../../../Command/Theme";

export const commandToJSX = (command: string, args?: string[]): JSX.Element => {
  switch (command) {
    case "whoami":
      return <WhoAmI />;
    case "hack":
      return <Hack />;
    case "theme":
      return <Theme command={command} args={args} />;
    default:
      return <NotFound command={command} />;
  }
};
