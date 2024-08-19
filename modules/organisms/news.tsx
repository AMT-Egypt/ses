import SwiperCore, { Autoplay } from 'swiper'
import ThreeLinesIcon from '../icons/threeLines'
SwiperCore.use([Autoplay])

// Import Swiper styles
import ShineHeadLine from 'modules/molcules/shineHeadline'
import Image from 'next/image'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/zoom'
import { Swiper, SwiperSlide } from 'swiper/react'
import LogoTest from '../../public/images/ses.png'
const NewsCard = () => {
  return (
    <div className="news_card">
      <div className="img-layer">
        <Image
          width="300"
          height="300"
          src={LogoTest}
        />
      </div>
      <div className="overflow-layer">
        <div className="content-section">
          <div className="icon">
            <ThreeLinesIcon />
          </div>
          <div className="title">Go Behind the Scenes of Apple’s First iPhone Release</div>
          <div className="date">OCTOBER 16. 2023</div>
        </div>
      </div>
    </div>
  )
}

export default function NewsModule(props: any) {
  return (
    <div className="newsModule container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-6 content-side">
            <div className="sub-section">
              <ThreeLinesIcon /> <p>News</p>
            </div>
            <ShineHeadLine
              text={
                <span>
                  Stay Close and Know <br /> More
                </span>
              }
            />
          </div>
        </div>
      </div>
      <div className="col-md-12 ">
        <div className="news-container">
          <Swiper
            style={{
              // @ts-ignore: Unreachable code error
              '--swiper-navigation-color': '#212529',
              '--swiper-pagination-color': '#212529',
            }}
            slidesPerView={3.3}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            loop={true}
            className="mySwiper2"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3.3,
              },
            }}
          >
            <SwiperSlide>
              <NewsCard />
            </SwiperSlide>
            <SwiperSlide>
              <NewsCard />
            </SwiperSlide>
            <SwiperSlide>
              <NewsCard />
            </SwiperSlide>
            <SwiperSlide>
              <NewsCard />
            </SwiperSlide>
            <SwiperSlide>
              <NewsCard />
            </SwiperSlide>
            <SwiperSlide>
              <NewsCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
