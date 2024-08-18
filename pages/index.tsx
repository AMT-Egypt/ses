import ClientsModule from 'modules/organisms/clients'
import DiveDeeperModule from 'modules/organisms/diveDeeper'
import GoalsModule from 'modules/organisms/goals'
import HeroModule from 'modules/organisms/hero'
import LetGetCloser from 'modules/organisms/letGetCloser'
import MethodologyModule from 'modules/organisms/methdology'
import NewsModule from 'modules/organisms/news'
import PartnersModule from 'modules/organisms/partners'
import ProductsModule from 'modules/organisms/products'
import ServicesModule from 'modules/organisms/services'
import SureStepModule from 'modules/organisms/sureStepMeth'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useEffect } from 'react'
const Home: any = (props: any) => {

  useEffect(() => {
    const serviceSection = document.getElementById('service-section')
    setTimeout(() => {
      if (window.scrollTo) {
        window.scrollTo(0, 100)
        setTimeout(() => {
          serviceSection.scrollIntoView({ behavior: 'smooth' })
        }, 3500)
      }
    }, 0)
  }, [])

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
