import Link, { LinkProps } from "../Link";

const contacts: LinkProps[] = [
  {
    name: "Blog",
    link: "https://nosyn.dev",
  },
  {
    name: "Github",
    link: "https://github.com/",
  },
  {
    name: "Gitlab",
    link: "https://gitlab.com/sonplusone",
  },
  {
    name: "Email",
    link: "nyenson@plusonerobotics.com",
    mail: true,
  },
];

const WhoAmI = () => {
  return (
    <>
      <h1 className="font-extrabold"># Hello, I'm Son Nguyen ✌</h1>
      <br />
      <h2 className="font-extrabold">## About me</h2>
      <p>
        I'm a web developer and enthusiastic programmer who always love learning new technogy. I have been working at
        <span className="font-bold italic text-violet-500"> Plus One Robotics</span> based in San Antonio , TX since
        2020. I find joy in creating efficient and scalable server-side solutions and have honed my skills in
        technologies such as
        <span className="font-bold italic text-green-500"> Node.js</span>,
        <span className="font-bold italic text-blue-500">Go</span>, and
        <span className="font-bold italic text-orange-500">Rust</span>. I have delivered a wide range of projects,
        ranging from complex database integrations to simple API connections. My goal is to build web applications that
        not only have a beautiful user interface, but also have a robust and secure back-end architecture. I am eager to
        continue my professional growth and contribute my skills to our team's success.
      </p>
      <br />
      <h2 className="font-extrabold">## Contacts</h2>
      {contacts.map((props) => (
        <Link key={props.name} {...props} />
      ))}
      <br />
      <h2 className="font-extrabold">## Explore more</h2>
      <p>
        Type{" "}
        <span
          className="font-bo
       text-purple-600">
          help
        </span>{" "}
        to learn more about me
      </p>
      <br />
    </>
  );
};

export default WhoAmI;
