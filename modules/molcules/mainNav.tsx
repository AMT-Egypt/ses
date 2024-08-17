import Link from 'next/link'
import DrawerIcon from '../icons/drawerIcon'
import Drawer from 'react-modern-drawer'
import { useEffect, useState } from 'react'
import 'react-modern-drawer/dist/index.css'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import LogoIcon from '../icons/logo'
import { useTransform, motion } from 'framer-motion'
export default function MainNav(props: any) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState)
  }

  const opacity = useTransform(props.scrollProgress, (fn: any) =>
    fn >= 0.2 && props.movingUp ? 1 : 0,
  )
  const transform = useTransform(props.scrollProgress, (fn: any) =>
    fn >= 0.2 && props.movingUp ? 'translateY(-20px)' : 'translateY(-200%)',
  )

  const { t } = useTranslation()
  const router = useRouter()
  const handleRouting = (route: any) => {
    setIsOpen(false)
    return router.push({ pathname: route })
  }

  const [showNav, setShowNav] = useState(true)

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setShowNav(false)
    } else {
      setShowNav(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* SLIDER */}
      <Drawer
        lockBackgroundScroll
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="the_toggler"
      >
        <ul className="lp_drawer_category-list">
          <li className="lp_category-list__item">
            <div onClick={() => handleRouting('/')}>
              <p>Home</p>
            </div>
          </li>
          <li className="lp_category-list__item">
            <div onClick={() => handleRouting('/about')}>
              <p>About</p>
            </div>
          </li>
          <li className="lp_category-list__item">
            <div onClick={() => handleRouting('/service')}>
              <p>Services</p>
            </div>
          </li>
          <li className="lp_category-list__item">
            <div onClick={() => handleRouting('/product')}>
              <p>Products</p>
            </div>
          </li>
          <li className="lp_category-list__item">
            <div onClick={() => handleRouting('/clients')}>
              <p>Clients</p>
            </div>
          </li>
          <li className="lp_category-list__item">
            <div onClick={() => handleRouting('/Blogs')}>
              <p>Blogs</p>
            </div>
          </li>
        </ul>
      </Drawer>
      {/* SLIDER */}

      <nav className="container-fluid nav">
        <div className="container lp-nav-container">
          <div className="row justify-content-between">
            <div className="col-6 col-md-4">
              <div className="logo-bar">
                {/* Slider Icon */}
                <div className="drawer-icon">
                  <button type="button" className="lp-nobtn" onClick={toggleDrawer}>
                    <DrawerIcon />
                  </button>
                </div>
                <div className="logo">
                  <LogoIcon />
                </div>
              </div>
            </div>
            {/* BIG NAV */}
            <div id="big_nav" className="middle col-md-5">
              <ul className="nav-list">
                <li>
                  <Link href="/"> Home </Link>
                </li>
                <li>
                  <Link href="/about"> About </Link>
                </li>
                <li>
                  <Link href="/service"> Services </Link>
                </li>
                <li>
                  <Link href="/product"> Products </Link>
                </li>
                <li>
                  <Link href="/clients"> Clients </Link>
                </li>
                <li>
                  <Link href="/Blogs"> Blogs </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <div className="nav-icons">
                <ul>
                  <li className="btn_parent">
                    {' '}
                    <Link href="/contact-us">
                      <a id="nav_btn" className="btn-outline btn-hover">
                        Contact Us
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* BIG NAV */}
          </div>
        </div>
      </nav>
      {/* secound Nav */}
      {showNav && (
        <motion.nav
          style={{
            opacity: opacity,
            transform: transform,
          }}
          className="container-fluid nav secondary-nav"
        >
          <div className="container lp-nav-container">
            <div className="row justify-content-between">
              <div className="col-6 col-md-4">
                <div className="logo-bar">
                  <div className="drawer-icon">
                    <button type="button" className="lp-nobtn" onClick={toggleDrawer}>
                      <DrawerIcon />
                    </button>
                  </div>
                  <div className="logo">
                    <LogoIcon />
                  </div>
                </div>
              </div>
              <div id="list" className="middle col-md-5">
                <ul className="nav-list">
                  <li>
                    <Link href="/"> Home </Link>
                  </li>
                  <li>
                    <Link href="/about"> About </Link>
                  </li>
                  <li>
                    <Link href="/service"> Services </Link>
                  </li>
                  <li>
                    <Link href="/product"> Products </Link>
                  </li>
                  <li>
                    <Link href="/clients"> Clients </Link>
                  </li>
                  <li>
                    <Link href="/Blogs"> Blogs </Link>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <div className="nav-icons">
                  <ul>
                    <li>
                      <Link href="/contact-us">
                        <a className="btn-outline btn-hover">Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </>
  )
}
