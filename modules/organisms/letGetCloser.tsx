import Link from 'next/link'
import ThreeLinesIcon from '../icons/threeLines'
export default function LetGetCloser(props: any) {
  return (
    <div className="letGetCloserModule container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-6 content-side">
            <div className="sub-section">
              <ThreeLinesIcon /> <p>Let’s Get Closer</p>
            </div>
            <h4 className="secondary-h1 main-color">It’s a pleasure to hear from you</h4>
            <p className="site-p">
              Let's discuss your project and how Solid Edge Solutions can help your business thrive
              in the digital age. Contact us today – we're here to partner with you on your journey
              to success. We look forward to hearing from you!
            </p>
          </div>
          <div className="col-md-6 desc-side contact-us">
            <Link href="/contact-us">
              <a className="btn-outline btn-hover">Contact Us</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
