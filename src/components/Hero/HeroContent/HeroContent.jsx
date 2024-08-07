import "./Hero.css";
import profilepic from "../../../assets/IMG_20240725_173925.png";
const HeroContent = () => {
  return (
    <div className="hero" style={{ position: "absolute", top: 0, left: 0 }}>
      <div className="main">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          minus perferendis nam aliquam laudantium cumque vel architecto,
          corporis beatae tempora quos optio obcaecati ad corrupti. Quis odio
          aspernatur inventore eligendi! Cumque voluptate quidem ut modi fugit
          explicabo magni laudantium odit dolorum praesentium quasi, itaque
          pariatur quo quisquam suscipit? Nam eos, exercitationem ratione
          corporis minima veritatis voluptate esse! Quod, dolorum asperiores.
          Hic deleniti sapiente vel est magnam dolor consectetur voluptatum ad
          velit id quod, magni dolorem enim laudantium dolorum fugit ex quidem
          rem quia numquam nihil neque molestias. Saepe, cupiditate sunt!
        </div>
        <div style={{marginBottom:"40px"}}>
          <img
            src={profilepic}
            alt=""
            style={{ height: 500, width: 500, marginRight: "60px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
