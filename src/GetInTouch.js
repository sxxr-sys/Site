import { Paragraph } from "./Paragraph";
import { TagTitles } from "./TagTitle";
import Mail from "./assist/Mail.svg";
import Copy from "./assist/Copy.svg";
import Call from "./assist/PhoneContact.svg";
import figma from "./assist/figma.svg";
import github from "./assist/github.svg";
import twitter from "./assist/twitter.svg";


export const Footer = () => {
  return (
    <div className="bg-black text-white gap-12 flex flex-col tracking-tight text-center py-24 px-20">
      <TagTitles
        ParaTitle={Paragraph[4].experience}
        title={Paragraph[4].title}
      />
      <div>

      <div className="flex justify-center gap-4">
        <img src={Mail} className="" alt="" />
        <p className="text-4xl font-semibold tracking-tight text-center">reachsagarshah@gmail.com</p>
        <img src={Copy} className="" alt="" />
      </div>
      <div className="flex justify-center gap-4">
        <img src={Call} className="" alt="" />
        <p className="text-4xl font-semibold tracking-tight text-center">+91 8980500565</p>
        <img src={Copy} className="" alt="" />
      </div>
      </div>
      <div className="g-2">

      <p className="flex justify-center">
        You may also find me on these platforms!
      </p>
      {/* <Icons3 className="flex flex-col items-center"/> */}
      <div className="flex justify-center">
        <img className="w-9 h-9 p-1.5 rounded-lg" src={figma} alt="" />
        <img className="w-9 h-9 p-1.5 rounded-lg" src={github} alt="" />
        <img className="w-9 h-9 p-1.5 rounded-lg" src={twitter} alt="" />
      </div>
      </div>
    </div>
  );
};
// width: Fill (1,440px)px;
// height: Hug (560px)px;
// padding: 96px 80px 96px 80px;
