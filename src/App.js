// import logo from "./logo.svg";
// import TaskItem from "./TaskItem";
// import Typography from "./Typography";
// import icon from "../assist/icon.svg";
// import "./App.css";
import Main from "./Main.js";
import { Skills } from "./ThirdPage.js";
import Header from "./header.js";
import SecondPage from "./secondPage.js";
import Experience  from "./Experience.js"
import { Footer } from "./GetInTouch.js";
import { LastFooter } from "./LastPage.js";


export const App = () => {

  return (
    <div>
      <Header />
      <Main />
      <SecondPage />
      <Skills/>
      <Experience/>
      <Footer/>
      <LastFooter/>
    </div>
  );
};
