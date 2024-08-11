import Link from 'next/link'

export default function InnerPageHead(props: any) {
  return (
    <section className="innerPageHeadModule container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="content-section">
              <h1> {props.title} </h1>
              <ul className="breedCrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span>{props.title}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
