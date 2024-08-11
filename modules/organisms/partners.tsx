import ThreeLinesIcon from '../icons/threeLines'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/zoom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { useMotionTemplate, motion } from 'framer-motion'
import { useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'
import ShineHeadLine from 'modules/molcules/shineHeadline'
const characters = 'SOLIDEDGESOLUTIONS'
const generateRandomString = (length: number) => {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters
  }
  return result
}
const CardPattern = ({ mouseX, mouseY, randomString }) => {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="card-pattern">
      <div className="first-div"></div>
      <motion.div className="circle-blur" style={style} />
      <motion.div className="random-text-wrapper" style={style}>
        <p className="random-text">{randomString}</p>
      </motion.div>
    </div>
  )
}
const PartnerCard = ({ mainText, desc }) => {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  const [randomString, setRandomString] = useState('')

  useEffect(() => {
    let str = generateRandomString(1800)
    setRandomString(str)
  }, [])

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)

    const str = generateRandomString(1800)
    setRandomString(str)
  }

  return (
    <div className="partnerCardWrapper">
      <div className="partnerCard">
        <div className="partner-card-top" onMouseMove={onMouseMove}>
          <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
          <div className="main-text">{mainText}</div>
        </div>
      </div>
    </div>
  )
}
export default function partnerModule(props: any) {
  return (
    <div className="partnerModule container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-12 content-side">
            <div className="sub-section text-center">
              <ThreeLinesIcon /> <p>Partners</p>
            </div>
            <ShineHeadLine
              text={
                <span>
                  {' '}
                  Our partnerships allow us to offer our clients a wider range of products and
                  services
                </span>
              }
            />
          </div>
        </div>
      </div>
      <div className="col-md-12 ">
        <div className="partner-container container">
          <Swiper
            style={{
              // @ts-ignore: Unreachable code error
              '--swiper-navigation-color': '#212529',
              '--swiper-pagination-color': '#212529',
            }}
            slidesPerView={3}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper2"
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <PartnerCard
                mainText="Microsoft"
                desc="Tech giant Microsoft offers diverse services for all businesses, known for Windows OS, Office suite, & Azure cloud platform."
              />
            </SwiperSlide>
            <SwiperSlide>
              <PartnerCard
                mainText="Microsoft"
                desc="Tech giant Microsoft offers diverse services for all businesses, known for Windows OS, Office suite, & Azure cloud platform."
              />
            </SwiperSlide>
            <SwiperSlide>
              <PartnerCard
                mainText="Microsoft"
                desc="Tech giant Microsoft offers diverse services for all businesses, known for Windows OS, Office suite, & Azure cloud platform."
              />
            </SwiperSlide>
            <SwiperSlide>
              <PartnerCard
                mainText="Microsoft"
                desc="Tech giant Microsoft offers diverse services for all businesses, known for Windows OS, Office suite, & Azure cloud platform."
              />
            </SwiperSlide>
            <SwiperSlide>
              <PartnerCard
                mainText="Microsoft"
                desc="Tech giant Microsoft offers diverse services for all businesses, known for Windows OS, Office suite, & Azure cloud platform."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
