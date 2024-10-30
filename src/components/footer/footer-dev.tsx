type IFooterDev = {
  link: string;
  name: string;
};

const FooterDev = (props: IFooterDev) => {
  return (
    <>
      <a href={props.link} target="_blank" className="text-sm text-blue-400">
        <span>{props.name}</span>
      </a>
    </>
  );
};

export default FooterDev;
