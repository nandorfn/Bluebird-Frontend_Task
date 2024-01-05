import Image from "next/image";
import Link from "next/link";
import { brandLogo, menus } from "../../helpers/data";
import xIcon from '../../assets/icon/x-mark.svg';
import menu from '../../assets/icon/menu.svg';
import SearchBar from "./SearchBar";

export const Navbar: React.FC = () => {
  return (
    <header className="bg-[#2f5296]">
      <nav className="flex justify-between items-center py-2 max-w-7xl mx-auto px-4">
        <Link href={'#'}>
          <Image
            src={brandLogo}
            width={150}
            height={42}
            alt="Bluebird" />
        </Link>
        <div className="hidden lg:flex gap-4 items-center">
          <ul className="inline-flex gap-4">
            {ListMenu}
          </ul>
          <SearchBar />
        </div>
        <SideMenu />
      </nav>
    </header>
  );
};

const ListMenu = menus.map((menu, index) => (
  <li key={index}>
    <Link className="text-white hover:font-semibold" href={menu.link}>
      {menu.label}
    </Link>
  </li>
));

const SideMenu = () => {
  return (
    <div className="drawer drawer-end  lg:hidden">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex justify-end">
        <label htmlFor="my-drawer-4" className="drawer-button w-fit cursor-pointer">
          <Image src={menu} width={20} height={20} alt="menu" />
        </label>
      </div>
      <div className="drawer-side">
        <label 
          htmlFor="my-drawer-4" 
          aria-label="close sidebar" 
          className="drawer-overlay">
        </label>
        <div className="menu py-4 px-0 w-72 min-h-full bg-[#2f5296] text-base-content flex flex-col gap-2">
          <label 
            htmlFor="my-drawer-4" 
            aria-label="close sidebar" 
            className=" cursor-pointer mx-4 w-fit">
            <Image 
              src={xIcon} 
              width={20} 
              height={20} 
              alt="close" />
          </label>
          <SearchBar />
          <ul className="flex flex-col font-medium">
            {ListMenu}
          </ul>
        </div>
      </div>
    </div>
  )
}
