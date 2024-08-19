import ThreeLinesIcon from '../icons/threeLines'
import ChessMythIcon from 'modules/icons/mythdlologyIcons/chessMethIcon'
import DefineRequirementsIcon from 'modules/icons/mythdlologyIcons/defineRequirments'
import DeploymentIcon from 'modules/icons/mythdlologyIcons/deploymentIcon'
import DesignIcon from 'modules/icons/mythdlologyIcons/designIcon'
import DevelopmentIcon from 'modules/icons/mythdlologyIcons/developmentIcon'
import MaintenanceModule from 'modules/icons/mythdlologyIcons/maintanceIcon'
import TestingIcon from 'modules/icons/mythdlologyIcons/testingIcon'
import ShineHeadLine from 'modules/molcules/shineHeadline'

const Myth_item = ({ icon, text, number, withRightBorder }) => {
  return (
    <div className="methmap_item ">
      <div className="meth_card">
        <div className="icon">{icon}</div>
        <div className="number">
          <div className={`number-circle ${withRightBorder && 'with_right_border'}`}>{number}</div>
        </div>
        <div className="desc">
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default function MethodologyModule(props: any) {
  return (
    <div className="methdologyModule container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-6 content-side">
            <div className="sub-section">
              <ThreeLinesIcon /> <p>Customized Solution Phases </p>
            </div>
            <ShineHeadLine text={<span>Agile Methodology</span>} />
            <p className="site-p">
              At Solid Edge Solutions, we leverage the Agile development methodology to deliver
              exceptional results for our clients. This iterative approach allows for faster time to
              market, enhanced flexibility, improved collaboration, reduced risk, and increased
              client satisfaction – all contributing to a successful project outcome.
            </p>
          </div>
          <div className="col-md-12 desc-side">
            <div className="methMapContainer">
              <Myth_item
                number="1"
                text="Planning & Analysis"
                icon={<ChessMythIcon />}
                withRightBorder={true}
              />
              <Myth_item
                number="2"
                text="Define Requirements"
                icon={<DefineRequirementsIcon />}
                withRightBorder={true}
              />
              <Myth_item number="3" text="Design" icon={<DesignIcon />} withRightBorder={true} />
              <Myth_item
                number="4"
                text="Development"
                icon={<DevelopmentIcon />}
                withRightBorder={true}
              />
              <Myth_item number="5" text="Testing" icon={<TestingIcon />} withRightBorder={true} />
              <Myth_item
                number="6"
                text="Deployment"
                icon={<DeploymentIcon />}
                withRightBorder={true}
              />
              <Myth_item
                number="7"
                text="Maintenance"
                icon={<MaintenanceModule />}
                withRightBorder={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
