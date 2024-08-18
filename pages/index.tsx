import MethodologyModule from 'modules/organisms/methdology'
import DiveDeeperModule from 'modules/organisms/diveDeeper'
import GoalsModule from 'modules/organisms/goals'
import HeroModule from 'modules/organisms/hero'
import ProductsModule from 'modules/organisms/products'
import ServicesModule from 'modules/organisms/services'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import SureStepModule from 'modules/organisms/sureStepMeth'
import NewsModule from 'modules/organisms/news'
import PartnersModule from 'modules/organisms/partners'
import LetGetCloser from 'modules/organisms/letGetCloser'
import ClientsModule from 'modules/organisms/clients'
import Head from 'next/head'
const Home: any = (props: any) => {
  return (
    <>
      <Head>
        <title>Solid Edge Solutions</title>
      </Head>
      <div className="page-content">
        <HeroModule />
        <ServicesModule />
        <DiveDeeperModule />
        <ProductsModule />
        <GoalsModule />
        <MethodologyModule />
        <SureStepModule />
        <NewsModule />
        <PartnersModule />
        <LetGetCloser />
        <ClientsModule />
      </div>
    </>
  )
}
export default Home

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
