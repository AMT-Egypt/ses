import ServicesModule from 'modules/organisms/services'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LetGetCloser from 'modules/organisms/letGetCloser'
import InnerPageHead from 'modules/organisms/inner_page_head'
import DiveDeeperModule from 'modules/organisms/diveDeeper'
import GoalsModule from 'modules/organisms/goals'
import MethodologyModule from 'modules/organisms/methdology'
import Head from 'next/head'

const Services: any = (props: any) => {
  return (
    <>
      <Head>
        <title>SES - About Us</title>
      </Head>
      <div className="page-content">
        <InnerPageHead title="About" />
        <GoalsModule />
        <LetGetCloser />
      </div>
    </>
  )
}
export default Services

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
