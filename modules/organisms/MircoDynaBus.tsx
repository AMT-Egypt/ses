import ThreeLinesIcon from "modules/icons/threeLines";
import ShineHeadLine from "modules/molcules/shineHeadline";
import Image from "next/image";

const MircoDynaBus = ({play,icons}) => {
    return (
        <div style={{display:`${play==="3" ? 'block' : 'none'}`}} className="content-section" >
            <div className="sub-section">
                <ThreeLinesIcon /> <p>Products</p>
            </div>
            <ShineHeadLine text={<span>Microsoft Dynamics Business Central</span>} />
            <div className="inner-content">
                <p>Simplify your business management with an all-in-one solution that connects your financials, sales, service, and operations. Streamline processes, gain a real-time view of your business, and access it from anywhere – perfect for small and mid-sized businesses with its ease of use, scalability, and cloud-based nature.</p>
                <div className="icon">{icons}</div>
                <Image src={"/images/products/secondVariant.png"} width="1000" height="600" alt='image' />
            </div>
        </div>
    );
}

export default MircoDynaBus;