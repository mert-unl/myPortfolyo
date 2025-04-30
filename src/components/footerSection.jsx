import { TbBrandTwitter } from "react-icons/tb";
import { FaCodepen } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

export default function FooterSection() {
  return (
    <div className="flex flex-col justify-center p-20 items-center">
      <h1 className="text-[#4731D3] text-5xl p-2 font-bold">
        Send me a message!
      </h1>
      <p className="text-[#120B39] font-normal text-center  my-4 text-2xl max-w-[550px]">
        Got a question or proposal, or just want to say hello? Go ahead
      </p>
      <p className="text-[#4731D3] mt-2 underline underline-offset-2 font-medium cursor-pointer">
        mertunal1998@gmail.com
      </p>

      <p className="flex flex-row gap-4 text-[#4731D3] mt-4 text-[35px]">
        <TbBrandTwitter />
        <FaCodepen />
        <MdOutlineAlternateEmail />
        <FaInstagram />
      </p>
    </div>
  );
}
