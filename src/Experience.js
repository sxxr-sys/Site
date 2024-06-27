import { Paragraph } from "./Paragraph";
// import { Tag } from "./Tag";
import { TagTitles } from "./TagTitle";
import LogoUpwork from "./assist/Upwork.svg";

// const headerTitle = [
//   "Sr. Frontend Developer",
//   "Team Lead",
//   "Full Stack Developer",
// ];

// const AllData = [
//   "Nov 2021 - Present",
//   "Jul 2017 - Oct 2021",
//   "Dec 2015 - May 2017",
// ];

// const data = AllData.map(AllData)
const WorkData = [
  {
    logo: LogoUpwork,
    position: "Sr. Frontend Developer",
    positionData: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      " Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    worked: "Nov 2021 - Present",
  },
  {
    logo: LogoUpwork,
    position: "Sr. Frontend Developer",
    positionData: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      " Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    worked: "Nov 2022 - Present",
  },
  {
    logo: LogoUpwork,
    position: "Sr. Frontend Developer",
    positionData: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      " Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    worked: "Nov 2023 - Present",
  },
];
// const BoardData =

// const array1 = [
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   "Ut pretium arcu et massa semper, id fringilla leo semper.",
//   "Sed quis justo ac magna.",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// ];

// const listItems = array1.map((array1) => <li>{array1}</li>);
//styleName: Body2/Normal - All;

// font-weight: 400;



const Experience = () => {
  return (
    <div className="flex flex-col items-center bg-[#111827] py-24 px-20">
      {/* <Tag Text="Experience" /> */}
      <TagTitles
        ParaTitle={Paragraph[2].experience}
        title={Paragraph[2].title}
      />
      {/* <p className="">Here is a quick summary of my most recent experiences:
            
          </p> */}
      <div className="max-w-[1280px] flex flex-col gap-10">
        {WorkData.map((el, i) => {
          return (
            <div
              key={i}
              className="flex items-start space-x-4 rounded-xl  bg-[#1F2937] px-8 py-8 gap-12 sm:flex-row flex-col dark:bg-dark text-white"
            >
              <img className="w-[102px] h-7 " src={LogoUpwork} alt=""></img>
              <div>
                <h1 className="max-w-[384px] text-xl font-semibold text-left">{el.position}</h1>
                <ul className="list-disc p-4 text-[#D1D5DB] text-base text-left font-normal">
                  {el.positionData.map((el, i) => {
                    return <li key={i}>{el}</li>;
                  })}
                </ul>
              </div>
              <div className="text-base text-left font-normal text-[#E5E7EB]">{el.worked}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
