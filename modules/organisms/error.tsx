import Link from 'next/link'

export default function Error404() {
  return (
    <div className="page-content error-page">
      <div className="container  lp_container">
        <div className="content">
          <div className="error-wrapper">
            <h1>OOOOOPS! Something Went Wrong</h1>
            <p>
              MayBe There's Something with our servers or the page your seeking is not Available
              Please Try Again Later
            </p>
            <Link href="/">
              <a>
                <button className="btn lp-black-btn"> Back To Lepce </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
