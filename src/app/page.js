import Hero from "@/components/Hero";
import Horizontal from "@/components/Horizontal";
import Project from "@/components/Project";
import ProjectHeader from "@/components/ProjectHeader";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Horizontal />
      <ProjectHeader />
      <Project src={"/project_card.svg"} header={"Promotional landing page for our favorite show"} paragraph={"Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures."} year={2025} view={"Live Demo"} />
      <Project  src={"/project image.svg"} header={"Blog site for World News"} paragraph={"Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development."} year={2025}git={false} view={"View Project"}/>
      <Project src={"/E-commerce.svg"} header={"E-commerce product page"} paragraph={"Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development."} year={2022} view={"Live Demo"}/>
      <Project src={"/About me.svg"} header={"I am a front-end developer based in Sydney. Has Mechanical Engineering background. "} paragraph={"I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill."} git={false} view={"MORE ABOUT ME"}/>
    </div>
  );
}
