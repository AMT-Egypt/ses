import Link from 'next/link';
import PhoneIcon from 'modules/icons/phoneIcon';
import ClockBaseIcon from 'modules/icons/clockIcon';
import ChatIcon from 'modules/icons/ChatIcon';
import PinIcon from 'modules/icons/pinIcon';
import { useEffect, useState } from 'react';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  desc: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, desc }) => {
  return (
    <div className="contactBox">
      <div className="icon">{icon}</div>
      <div className="title">
        <span>{title}</span>
      </div>
      <div className="desc">{desc}</div>
    </div>
  );
};

const ContactUsBoxesModule: React.FC = () => {
  const [spaceState, setSpaceState] = useState<string>('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 425) {
        setSpaceState(' ');
      } else {
        setSpaceState('');
      }
    };

    // Initial check
    handleResize();

    // Attach event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="diveDeeperModule container-fluid">
      <div className="boxes-wrapper">
        <ContactCard
          icon={<ChatIcon />}
          title="Chat To Support"
          desc={
            <div className="desc-content">
              <span>info@solidedgeso{spaceState}lutions.net</span>
            </div>
          }
        />

        <ContactCard
          icon={<PinIcon />}
          title="Visit Us"
          desc={
            <div className="desc-content">
              <span>126 Sameh Gado st. 6th of October. Giza</span>
            </div>
          }
        />

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
  );
};

export default ContactUsBoxesModule;
