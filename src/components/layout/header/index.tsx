import Menus from "./Menus";

const Header = (): JSX.Element => {
  return (
    <div className="relative z-50 flex-row items-center w-full lg:h-12 lg:fixed lg:flex">
      <Menus />
    </div>
  );
};

export default Header;
