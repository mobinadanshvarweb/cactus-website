const Navigation = ({
  href,
  text,
  classname,
}: {
  href: string;
  text: string;
  classname?: string;
}) => {
  return (
    <>
      <li className={`cursor-pointer ${classname}`}>
        <a href={href}> {text}</a>
      </li>
    </>
  );
};

export default Navigation;
