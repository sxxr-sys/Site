import DarkLightMode from "./assist/dark-mode.svg";

const SS = "<SS/>";
// width: 24px;
// height: 0px;
// gap: 0px;
// border: 1px 0px 0px 0px;
// opacity: 0px;
// angle: 90 deg;
// border: 1px solid var(--Gray-Dark-100, #1F2937)

const Header = () => {
  return (
    <div>
      <div className="flex justify-center mt-8 bg-[#000000] text-white">
        <div className="flex justify-between w-[1280px] items-center px-8">
          <div className="text-3xl font-bold">{SS}</div>
          <div className="flex flex-row justify-between gap-6 items-center">
            <div>About</div>
            <div>Work</div>
            <div>Testimonials</div>
            <div>Contact</div>
            <div className="w-6 h-0 border-"></div>
            <img className="w-[24px] h-[24px] bg-black " src={DarkLightMode} alt=""></img>
            <button className="px-[14px] py-[2px] bg-white text-black rounded-xl">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
