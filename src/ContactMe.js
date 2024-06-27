import MailIcon from "./assist/Mail.svg";
import CopyIcon from "./assist/Copy.svg";
import CallIcon from "./assist/Call.svg";




export const Container = () => {
  return (
    <div className="bg-black py-24 px-20">
      <div></div>
      <div>
        <div>
          <img src={MailIcon} alt="">
            {" "}
          </img>
          <p>reachsagarshah@gmail.com</p>
          <img src={CopyIcon} alt=""></img>
        </div>
      </div>
      <div>
        <img src={CallIcon} alt=""></img>
        <p>+91 8980500565</p>
        <img src={CopyIcon} alt=""></img>
      </div>
      
    </div>
  );
};
