import FacbookFooterIcon from 'modules/icons/facebookIcon'
import InstagramFooterIcon from 'modules/icons/instagramFooterIcon'
import LinkedInFooterIcon from 'modules/icons/linkedInFooterIcon'
import LogoIcon from 'modules/icons/logo'
import Link from 'next/link'

export default function FooterModule(props: any) {
  return (
    <footer className="footerModule container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="footerLogo">
              {' '}
              <LogoIcon />
            </div>
            <div className="footerDesc">
              <p>
                At Solid Edge Solutions (SES), we're passionate about shaping the digital future.
                Our team of pioneering minds thrives on innovation, crafting cutting-edge software
                development and solutions that push the boundaries of possibility.
              </p>
            </div>
            <div className="socialMediaIcons">
              <Link href="/">
                <>
                  <FacbookFooterIcon />{' '}
                </>
              </Link>
              <Link href="/">
                <>
                  <InstagramFooterIcon />{' '}
                </>
              </Link>
              <Link href="/">
                <>
                  <LinkedInFooterIcon />{' '}
                </>
              </Link>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-6">
                <div className="menu-item">
                  <div className="menueLabel">
                    <Link href="/">Company</Link>
                  </div>
                  <ul className="menuList">
                    <li>
                      {' '}
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      {' '}
                      <Link href="/product">Products</Link>
                    </li>
                    <li>
                      {' '}
                      <Link href="/service">Services</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6">
                <div className="menu-item">
                  <div className="menueLabel">
                    <span>Address</span>
                  </div>
                  <ul className="menuList">
                    <li>
                      {' '}
                      <span>info@solidedgesolutions.net</span>
                    </li>

                    <li>
                      {' '}
                      <span>+20 102 340 6947</span>
                    </li>

                    <li>
                      {' '}
                      <span>+20 111 632 2237</span>
                    </li>
                    <li>
                      {' '}
                      <span>+971 55 882 6291</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-12">
          <div className="footer-rights">
            <p>© 2024 All Rights Reserved For SES</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
