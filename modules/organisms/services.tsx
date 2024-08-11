import ApiIntegrationServiceIcon from 'modules/icons/apIntegrationServiceIcon'
import ConsultancyService from 'modules/icons/consultencyService'
import CustomSoftwareServiceIcon from 'modules/icons/customSoftwareServiceIcon'
import EcommerceServiceIcon from 'modules/icons/ecommerceServiceIcon'
import SeoServiceIcon from 'modules/icons/seoServiceIcon'
import SmartPlatformServiceIcon from 'modules/icons/smartPlatformServiceIcon'
import ThreeLinesIcon from 'modules/icons/threeLines'
import WorldServiceIcon from 'modules/icons/worldServiceIcon'
import ShineHeadLine from 'modules/molcules/shineHeadline'
const ServiceItem = ({ icon, title, desc, className }) => {
  return (
    <div className={`service_item ${className}`}>
      <div className="icon">{icon}</div>
      <div className="title">{title}</div>
      <div className="description">{desc}</div>
    </div>
  )
}
export default function ServicesModule() {
  return (
    <div className="container-fluid servicesModule">
      <div className="serviceBackgroundImage"></div>
      <div className="headContent">
        <div className="sub-section">
          <ThreeLinesIcon /> <p>Services</p>
        </div>
        <ShineHeadLine text={<span>Efficient, Productive, and Profitable.</span>} />
      </div>
      <div className="servicesTable">
        <ServiceItem
          className="width-25 border-right border-bottom-ss"
          icon={<WorldServiceIcon />}
          title="Web development"
          desc="Craft a user-friendly, high-performing website that perfectly reflects your brand identity and achieves your business goals."
        />
        <ServiceItem
          className="width-25 border-right border-bottom-ss"
          icon={<CustomSoftwareServiceIcon />}
          title="Custom software"
          desc="Streamline your operations and boost efficiency with custom software solutions meticulously tailored to your specific needs."
        />
        <ServiceItem
          className="width-25 border-right border-bottom-ss"
          icon={<EcommerceServiceIcon />}
          title="E-commerce"
          desc="Turn your business online with a secure and scalable e-commerce platform, empowering you to sell your products to a global audience."
        />
        <ServiceItem
          className="width-25  border-bottom-ss"
          icon={<SeoServiceIcon />}
          title="Seo"
          desc="Increase your website's visibility in search engine results and attract more qualified leads through strategic search engine optimization techniques."
        />
        <ServiceItem
          className="width-33 border-right"
          icon={<ApiIntegrationServiceIcon />}
          title="API integration"
          desc="Connect your applications and data seamlessly, unlocking new possibilities with our expertise in API integration."
        />
        <ServiceItem
          className="width-33 border-right"
          icon={<SmartPlatformServiceIcon />}
          title="Smart platforms"
          desc="Leverage the power of smart platforms to automate tasks, gain valuable insights from your data, and optimize your operations for maximum efficiency."
        />
        <ServiceItem
          className="width-33 "
          icon={<ConsultancyService />}
          title="Consultancy services"
          desc="Get expert guidance and support for all your IT needs, from developing a winning strategy to successful implementation."
        />
      </div>
    </div>
  )
}
