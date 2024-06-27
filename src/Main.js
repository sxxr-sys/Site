import myImg from "./assist/Img.png";
import LocoLogo from "./assist/location.svg";
import figma from "./assist/figma.svg";
import github from "./assist/github.svg";
import twitter from "./assist/twitter.svg";

// width: Fill (1,280px)px;
// height: Hug (360px)px;
// padding: 0px 32px 0px 32px;
// gap: 48px;
// opacity: 0px;


const Main = () => {
  return (
    <div className="bg-black flex px-20 py-24 text-slate-50">
      <div className="flex flex-col gap-12 px-8">
        <div className="text-slate-100">
          <h1 className="flex text-4xl ">Hi, I’m Sagar 👋</h1>
          <p className="text-sm font-thin">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div className="flex-col  gap-2">
          <div className="flex">
            <img className="size-6" src={LocoLogo} alt="Location"></img>
            <p className="text-slate-50 text-sm font-normal ">
              Ahmedabad,india
            </p>
          </div>
          <div className="flex">
            <p className="flex items-center gap-2 ml-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping relative">
                {" "}
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full absolute"></div>
              Available for new projects
            </p>
          </div>
          <div className="flex">
            
          </div>
        </div>
        <div>
            <div className="flex ">
              <img className="w-9 h-9 p-1.5 rounded-lg" src={github} alt="" />
              <img className="w-9 h-9 p-1.5 rounded-lg" src={twitter} alt="" />
              <img className="w-9 h-9 p-1.5 rounded-lg" src={figma} alt="" />
            </div>

        </div>
      </div>
      <img
        className="max-w-[280px] max-h-[320px] "
        src={myImg}
        alt="Profile"
      ></img>
    </div>
  );
};

export default Main;
