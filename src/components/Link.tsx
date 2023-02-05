export interface LinkProps {
  name: string;
  link: string;
  mail?: boolean;
}

const Link = ({ name, link, mail }: LinkProps) => {
  return (
    <p>
      - <span className="font-bold">[{name}]</span>
      <a className="hover:underline" href={mail ? `mailto:${link}` : link} target="_blank">
        ({link})
      </a>
    </p>
  );
};

export default Link;
