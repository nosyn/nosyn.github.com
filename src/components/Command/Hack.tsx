const AVAILABLE_COMMANDS = [
  {
    command: "whoami",
    description: "Describe who I am 👀",
  },
  {
    command: "clear",
    description: "Clear the screen 🧹",
  },
];

const Hack = () => {
  return (
    <ul className="list-disc">
      {AVAILABLE_COMMANDS.map((ac) => (
        <li key={ac.command}>
          {ac.command} ---- {ac.description}
        </li>
      ))}
    </ul>
  );
};

export default Hack;
