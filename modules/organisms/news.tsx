import Link from 'next/link'
import ThreeLinesIcon from '../icons/threeLines'
import SwiperCore, { Autoplay } from 'swiper'
SwiperCore.use([Autoplay])

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/zoom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs, Zoom } from 'swiper'
import Image from 'next/image'
import ShineHeadLine from 'modules/molcules/shineHeadline'

const NewsCard = () => {
  return (
    <div className="news_card">
      <div className="img-layer">
        <Image
          width="400"
          height="400"
          src="https://s3-alpha-sig.figma.com/img/b7b7/64ed/15b73d7cdac031eba9a5754ed39a9ffd?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cq1lyJCQYwpmcrtuTFHzqT6WUuEysDQGXCLDAIBbXDrcYMXC2fzFifZpxDjd1N3zyjGjCnN-6D2TRhtXItnQf51rekfy8wW~W77GjZRV1rNlIDt4IbzBsXB~hyfYMQ8Nkf2i0rSerdXiJIxOQ4cx~5ZXwWnHfRdpaMnAhw7D3BPUH-Hyu7QBOMRlLIXeGdOkws2u-F61fxmJ8xqF1DUOKfcOM2pbvOS26~nN4oLHLEWq80Zo45TcQFPecjR2fnHuHjYbCYAoZtodfhTHlGv97ZDdlaQOJb9N5Dabby6FelfLOyxkJ8oAUTuU7dRqqSDoVeDU6Bf7Tyhn6PIBlm-UWA__"
        />
      </div>
      <div className="overflow-layer">
        <div className="content-section">
          <div className="icon">
            {' '}
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
