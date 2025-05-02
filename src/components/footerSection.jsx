import { TbBrandTwitter } from "react-icons/tb";
import { FaCodepen } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { useContext } from "react";
import { languageContext } from "../App";

export default function FooterSection() {
  const { lang } = useContext(languageContext);
  const data = lang.footerSection;
  return (
    <section className="flex flex-col justify-center p-20 items-center   bg-[var(--color-customFooterBack)] font-inter">
      <h1 className="text-[var(--color-customFooterIcon)]  text-3xl md:text-5xl p-2 font-bold">
        {data.sendMessage}{" "}
      </h1>
      <h4 className="text-[var(--color-customFooterText)] font-normal text-center  my-4  text-lg md:text-2xl max-w-[550px]">
        {data.messageText}
      </h4>

      <a
        href={`mailto:${data.email}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--color-customFooterIcon)] mt-2 underline underline-offset-2 font-medium cursor-pointer"
      >
        {data.email}
      </a>

      <p className="flex flex-row gap-4 text-[var(--color-customFooterIcon)] mt-4 text-[35px]">
        <TbBrandTwitter />
        <FaCodepen />
        <MdOutlineAlternateEmail />
        <FaInstagram />
      </p>
    </section>
  );
}
