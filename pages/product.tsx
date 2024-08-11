import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LetGetCloser from 'modules/organisms/letGetCloser'
import InnerPageHead from 'modules/organisms/inner_page_head'
import ProductsModule from 'modules/organisms/products'
import Head from 'next/head'

const Products: any = (props: any) => {
  return (
    <>
      <Head>
        <title>SES - Products</title>
      </Head>
      <div className="page-content">
        <InnerPageHead title="Products" />
        <ProductsModule />
        <LetGetCloser />
      </div>
    </>
  )
}
export default Products

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
