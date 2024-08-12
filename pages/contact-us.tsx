import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import InnerPageHead from 'modules/organisms/inner_page_head'
import GetCloseContactUsModule from 'modules/organisms/getCloseContactUs'
import ContactUsBoxesModule from 'modules/organisms/contactusCards'
import ContactUsMapModule from 'modules/organisms/contactUpsMap'
import SendUsMessageModule from 'modules/organisms/sendUsMessage'
import Head from 'next/head'

const ContactUs: any = (props: any) => {
  return (
    <>
      <Head>
        <title>SES - Contact Us !</title>
      </Head>
      <div className="page-content">
        <InnerPageHead title="Contact Us" />
        <GetCloseContactUsModule />
        <ContactUsBoxesModule />
        <SendUsMessageModule />
      </div>
    </>
  )
}
export default ContactUs

export async function getServerSideProps(props: any) {
  try {
    return {
      props: {
        ...(await serverSideTranslations(props.locale, ['common'])),
      },
    }
  } catch (err) {
    console.log(err)
    return {
      props: {
        initialData: {
          error: true,
          data: {},
        },
        ...(await serverSideTranslations(props.locale, ['common'])),
      },
    }
  }
}
