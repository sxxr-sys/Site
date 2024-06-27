import { Tag } from "./Tag";

export const TagTitles = ({ ParaTitle, title }) => {
  console.log(ParaTitle);
  console.log(title);
  return (
    <div className="flex flex-col items-center gap-4 text-[#D1D5DB] text-xl leading-7 text-center">
      <Tag Text={title} />
      <p>{ParaTitle}</p>
    </div>
  );
};
