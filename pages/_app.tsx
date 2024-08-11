import App from 'next/app'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { useEffect, useRef, useState } from 'react'
import Router, { useRouter } from 'next/router'
import Head from 'next/head'
import ReactModal from 'react-modal'
import { Cookies, CookiesProvider } from 'react-cookie'

// If loading a variable font, you don't need to specify the font weight

import 'rc-slider/assets/index.css'
import 'rc-tooltip/assets/bootstrap.css'
import 'rc-dropdown/assets/index.css'

import 'react-datepicker/dist/react-datepicker.css'
import '../scss/style.scss'
import MainNav from 'modules/molcules/mainNav'
import FooterModule from 'modules/organisms/footer'
import { useScroll, useTransform } from 'framer-motion'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactModal.setAppElement('#__next')
interface IProps extends AppProps {
  cookies?: any
}

function MyApp(props: IProps) {
  const { Component, pageProps, cookies } = props
  const [loading, setLoading] = useState(false)
  const isBrowser = typeof window !== 'undefined'
  const [movingUp, setMovingUp] = useState(false)
  const router = useRouter()

  useEffect(() => {
    let dir = router.locale == 'ar' ? 'rtl' : 'ltr'
    let lang = router.locale == 'ar' ? 'ar' : 'en'

    document.querySelector('html')?.setAttribute('dir', dir)
    document.querySelector('html')?.setAttribute('lang', lang)
  }, [router.locale])
  const mainRef = useRef()
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ['start end', 'end start'],
  })
  function onWheel(event) {
    const THRESHOLD = 10

    if (event.deltaY > THRESHOLD) {
      setMovingUp(false)
    }

    if (event.deltaY < -THRESHOLD) {
      setMovingUp(true)
    }
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="theme-color" content="#fffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="description" content="يجب وضع وصف لمشروع هنا" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CookiesProvider cookies={isBrowser ? undefined : new Cookies(cookies)}>
        <div
          onWheel={onWheel}
          ref={mainRef}
          className={`main_body ${router.locale === 'en' ? 'ltr' : 'rtl'}`}
        >
          <ToastContainer />
          <MainNav movingUp={movingUp} scrollProgress={scrollYProgress} />
          <Component {...pageProps} isLoading={loading} />
          <FooterModule />
        </div>
      </CookiesProvider>
    </>
  )
}

export default appWithTranslation(MyApp)

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext)
  // Next.js 11 & 12
  // return { ...appProps, cookies: appContext.ctx.req?.headers.cookie }
  // Next.js 12 only
  return { ...appProps, cookies: appContext.ctx.req?.cookies }
}
