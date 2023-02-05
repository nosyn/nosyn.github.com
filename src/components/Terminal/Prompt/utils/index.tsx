import WhoAmI from "../../../../components/Command/WhoAmI";

export const commandToJSX = (command: string, args?: string[]): JSX.Element => {
  switch (command) {
    case "whoami":
      return <WhoAmI />;
    default:
      return <span />;
  }
};
