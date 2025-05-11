import Header from "./components/Header";
import Intro from "./components/Intro";
import Transition from "./components/Transition";
import Courses from "./components/Courses";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Transition />
      <Courses />
      <Faq />
    </>
  );
}
