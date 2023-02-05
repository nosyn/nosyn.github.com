interface NotFoundProps {
  command?: string;
}
const NotFound = ({ command }: NotFoundProps) => {
  return (
    <p>
      {command && (
        <span>
          command not found:{"  "}
          <span className="text-red-500">{command}. </span>
        </span>
      )}
      <span>
        Type <span className="text-purple-500">hack</span> for available commands.
      </span>
    </p>
  );
};

export default NotFound;
