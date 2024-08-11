import OurApproachIcon from 'modules/icons/ourApproachIcon'
import OurVisionIcon from 'modules/icons/ourvisionIcon'
import OurMissionIcon from 'modules/icons/outMissionIcon'
import ThreeLinesIcon from 'modules/icons/threeLines'
import ShineHeadLine from 'modules/molcules/shineHeadline'
const GoalsCard = ({ icon, title, desc }) => {
  return (
    <div className="goalsCard">
      <div className="icon">{icon}</div>
      <div className="title secondary-color">{title}</div>
      <div className="desc">{desc}</div>
    </div>
  )
}
export default function GoalsModule() {
  return (
    <div className="container-fluid goalsModule">
      <div className="headContent">
        <div className="sub-section">
          <ThreeLinesIcon /> <p>Making a Difference</p>
        </div>
        <ShineHeadLine text={<span>Who we are</span>} />
        <p>
          Our core values are customer focus, innovation, integrity, and excellence. We are
          committed to providing our clients with the best possible products and services, and to
          helping them achieve their business goals and objectives.
        </p>
      </div>
      <div className="goalsCardWrapper">
        <GoalsCard
          icon={<OurMissionIcon />}
          title="Our Mission"
          desc="To empower businesses with innovative software solutions and propel them forward in the ever-evolving digital landscape.  We strive to be a trusted partner, helping our clients achieve success through cutting-edge technology and exceptional service."
        />
        <GoalsCard
          icon={<OurVisionIcon />}
          title="Our Vision"
          desc="Solid Edge Solutions envisions a future where businesses thrive through seamless and powerful digital solutions. We are dedicated to being at the forefront of innovation, constantly pushing the boundaries of software development to create a more efficient and connected world."
        />
        <GoalsCard
          icon={<OurApproachIcon />}
          title="Our Approach"
          desc="We believe in a collaborative approach, working closely with our clients to understand their unique needs.  Our team of passionate experts leverages their extensive knowledge and creativity to develop customized solutions that deliver exceptional results. We prioritize clear communication and ongoing support throughout the entire process."
        />
      </div>
    </div>
  )
}
