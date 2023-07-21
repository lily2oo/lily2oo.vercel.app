import gsap from "gsap";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      "#about",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );
  });
  return (
    <section id="about" className="wrapper">
      <img src="/images/about/me.webp" alt="" />
      <p>
        Jumpei Suko
        <br />
        <br />
        Born in Tokyo, Japan.
        <br />
        Digital Hollywood University March 2021 - Current.
        <br />
        After graduating from high school, I took a year as a gap year to
        reexamine myself. Then I decided to pursue a career in creation and
        entered Digital Hollywood University. As a way to give back to creation,
        I also engages in programming education for children and Creating events
        that give children creative experience.
        <br />
        <br />
        I work to make me and the people I love as happy as possible through
        ideas and creation.
        <br />
        <br />
        <span>
          須古純平
          <br />
          <br />
          東京都生まれ。
          <br />
          デジタルハリウッド大学在学中。
          <br />
          高校を卒業してから、自分自身を見つめ直すために一年ギャップイヤーを経て、創作の道に進むことを決意。その後、デジタルハリウッド大学へ進学。また、創作への恩返しとして、子どもに向けたプログラミング教育や、創作体験イベントの制作にも従事している。
          <br />
          <br />
          アイデアと創作の力で、大切な人や自分の世界を少しでも幸せにするために、日々活動している。
        </span>
      </p>
    </section>
  );
};

export default About;
