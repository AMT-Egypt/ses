import Link from 'next/link'
import ThreeLinesIcon from '../icons/threeLines'
import ShineHeadLine from 'modules/molcules/shineHeadline'
import PinIcon from 'modules/icons/pinIcon'
import EmailIcon from 'modules/icons/emailIcon'
import PhoneIcon from 'modules/icons/phoneIcon'
import ClockBaseIcon from 'modules/icons/clockIcon'
const ContactCard = ({ icon, title, desc }) => {
  return (
    <div className="contactBox">
      <div  className="icon">{icon}</div>
      <div className="title">
        <span>{title}</span>
      </div>
      <div className="desc">{desc}</div>
    </div>
  )
}
export default function ContactUsBoxesModule(props: any) {
  return (
    <div className="diveDeeperModule container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <ContactCard
              icon={<PinIcon />}
              title="LOCATIONS"
              desc={
                <div className="desc-content">
                  <span>126 Sameh Gado st. 6th of October. Giza</span>
                </div>
              }
            />
          </div>
          <div className="col-12 col-md-3">
            <ContactCard
              icon={<EmailIcon />}
              title="EMAIL"
              desc={
                <div className="desc-content">
                  <span>info@solidedgesolutions.net</span>
                  <span>www.ses.net</span>
                </div>
              }
            />
          </div>
          <div className="col-12 col-md-3">
            <ContactCard
              icon={<PhoneIcon />}
              title="PHONE"
              desc={
                <div className="desc-content">
                  <Link href="tel:+201023406947">+20 102 340 6947</Link>
                  <Link href="tel:+201116322237">+20 111 632 2237</Link>
                  <Link href="tel:+971558826291">+971 55 882 6291</Link>
                </div>
              }
            />
          </div>
          <div className="col-12 col-md-3">
            <ContactCard
              icon={<ClockBaseIcon />}
              title="WORKING HOURS"
              desc={
                <div className="desc-content">
                  <span>Sunday _ Thursday,</span>
                  <span>08:00am – 06:00pm</span>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}
