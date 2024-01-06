import { aboutUs, appSource, brandLogo, extendLinks, products, sosmedLink } from "@/app/helpers/data";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2f5296] text-white">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto justify-between p-5 gap-5">
        <section className="flex flex-col gap-5">
          <Image src={brandLogo} width={231} height={65} alt="Bluebird" />

          <address id="companyAddress" className="not-italic">
            <h2 className="font-semibold text-lg">Bluebird Main Office</h2>
            <p> Jl. Mampang Prapatan Raya No. 60, Jakarta 12790 </p>
          </address>

          <div id="companySosialMedia">
            <h2 className="font-semibold text-lg">Connect with us</h2>
            <ul className="flex flex-row gap-2">
              {sosmedLink?.map((item: TLinkSource, index: number) => (
                <li key={index}>
                  <Link href={item.href} target="_blank">
                    <Image src={item.logo} width={25} height={25} alt={item.logo} />
                  </Link>
                </li>
              ))
              }
            </ul>
          </div>
          <List title={null} menu={extendLinks} />
        </section>

        <section className="flex flex-col">
          <div id="companyMobileApp" className=" mb-5">
            <h2 className="font-semibold text-lg">Start your journey with us</h2>
            <div className="flex flex-wrap gap-2 h-fit items-center justify-start">
              {
                appSource?.map((item: TLinkSource, index: number) => (
                  <Link href={item.href} target="_blank" key={index}>
                    <Image
                      src={item.logo}
                      width={140}
                      height={40}
                      alt={item.label} />
                  </Link>
                ))
              }
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-5">
            <List title={'About Us'} menu={aboutUs} />
            <List title={'Products'} menu={products} />
          </div>
        </section>
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
  const items = menu?.map((item: string | null, index: number) => (
    <li className="me-5" key={index}>
      <Link href={'#'}>
        {item}
      </Link>
    </li>
  ))

  return (
    <div className="flex flex-col">
      <h2 className="font-semibold text-lg">{title}</h2>
      <ul className="gap-2 flex flex-col max-h-60 font-light flex-wrap">
        {items}
      </ul>
    </div>
  )
}