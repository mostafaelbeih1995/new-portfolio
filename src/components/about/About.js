import "./about.css";
// import Award from "../../../img/award/png";
// import codePic from "../../img/code.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={`../../img/developer.jpg`}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        {/* <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p> */}
        <p className="a-desc">
          Dedicated and efficient full stack developer with 4+ years experience in application layers, presentation layers, and databases.Highly skilled with the MERN stack. Eager to build innovative and cutting edge business solutions. A wide range of tech stack knowledge : <bold>Java</bold>, <bold>C#</bold>, <bold>Unity</bold>, <bold>Flutter</bold>, <bold>Python</bold>, <bold>PHP</bold>.
        </p>
        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
