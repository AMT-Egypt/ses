import ThreeLinesIcon from "modules/icons/threeLines";
import ShineHeadLine from "modules/molcules/shineHeadline";
import Image from "next/image";

const MircoDynaFin = ({play,icons}) => {
    return (
        <div style={{display:`${play==="2" ? 'block' : 'none'}`}} className="content-section" >
            <div className="sub-section">
                <ThreeLinesIcon /> <p>Products</p>
            </div>
            <ShineHeadLine text={<span>Microsoft Dynamics Finance and Operations</span>} />
            <div className="inner-content">
                <p>Manage your entire financial and operational side with a powerful and comprehensive solution. Finance & Operations offers advanced features for financial management, supply chain management, project management, and more. Designed for larger and more complex organizations, it empowers you to make data-driven decisions, optimize processes, and gain a competitive edge</p>
                <div className="icon">{icons}</div>
                <Image src={"/images/products/thirdVaraint.png"} width="1000" height="600" alt='image' />
            </div>
        </div>
    );
}

export default MircoDynaFin;
