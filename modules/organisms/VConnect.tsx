import ProductStIcon from "modules/icons/productIcons/st";
import ThreeLinesIcon from "modules/icons/threeLines";
import ShineHeadLine from "modules/molcules/shineHeadline";
import Image from "next/image";

const VConnect = ({play}) => {
    return (
        <div style={{display:`${play==="4" ? 'block' : 'none'}`}} className="content-section" >
            <div className="sub-section">
                <ThreeLinesIcon /> <p>Products</p>
            </div>
            <ShineHeadLine text={<span>V-Connect</span>} />
            <div className="inner-content">
                <p>Your first destination for unified communications and digital transformation in the Middle East and North Africa. All-in-one solutions that provide all the necessary tools for effective, fast, and secure business needs.</p>
                <div className="icon"><ProductStIcon /></div>
                <Image src={"/images/products/fourthVariant.png"} width="1000" height="600" alt='image' />
            </div>
        </div>
    );
}

export default VConnect;
