import Img2 from "./assist/ImgPage2.png";
import { Paragraph } from "./Paragraph";
// import { Tag } from "./Tag";
import { TagTitles } from "./TagTitle";

// font-weight: 400;
// text-align: left;


const SecondPage = () => {
  return (
    <div className=" py-24 px-20 justify-between bg-[#111827] gap-12">

      <TagTitles className="flex flex-col items-center"
        ParaTitle={Paragraph[0].experience}
        title={Paragraph[0].title}
      />
    <div className=" text-slate-100 flex justify-between gap-12 size-full">

      <img className="size-full w-[440px] h-[520px]" src={Img2} alt=""></img>

      <div className="flex flex-col gap-6 text-left w-[584px] h-[694px]">
        <h1 className="text-3xl tracking-tighter font-semibold">Curious about me? Here you have it:</h1>
        <div className="text-base font-normal text-left"> 
          <p className="">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
            <br/> <br/> I began my journey as a web developer in 2015, and since then, I've continued to grow
            and evolve as a developer, taking on new challenges and learning the
            latest technologies along the way. Now, in my early thirties, 7
            years after starting my web development journey, I'm building
            cutting-edge web applications using modern technologies such as
            Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
            <br/> <br/> I
            am very much a progressive thinker and enjoy working on products end
            to end, from ideation all the way to development.
            <br/> <br/>
             When I'm not in full-on developer mode, you can find me hovering around on twitter
            or on indie hacker, witnessing the journey of early startups or
            enjoying some free time. You can follow me on Twitter where I share
            tech-related bites and build in public, or you can follow me on
            GitHub.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SecondPage;
