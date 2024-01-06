import { aboutUs, brandLogo, extendLinks, products, sosmedLink } from "@/app/helpers/data";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2f5296] text-white">
      <div>
        <Image src={brandLogo} width={231} height={65} alt="Bluebird" />

        <h2>Bluebird Main Office</h2>
        <p> Jl. Mampang Prapatan Raya No. 60, Jakarta 12790 </p>

        <h2>Connect with us</h2>
        <ul className="flex flex-row gap-2">
          {sosmedLink?.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <Image src={item.logo} width={25} height={25} alt={item.logo} />
              </Link>
            </li>
          ))
          }
        </ul>
        
        <List title={null} menu={extendLinks}/>
        <List title={'About Us'} menu={aboutUs}/>
        <List title={'Products'} menu={products}/>
      </div>

    </footer>
  );
};

export default Footer;

type List = {
  title: string | null;
  menu: string[];
}

const List = ({ title, menu }: List) => {
  const items = menu?.map((item, index) => (
    <li key={index}>
      {item}
    </li>
  ))

  return (
    <>
      <h2 className="font-semibold text-lg">{title}</h2>
      <ul>
        {items}
      </ul>
    </>
  )
}