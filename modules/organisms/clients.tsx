import Link from 'next/link'
import ThreeLinesIcon from '../icons/threeLines'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/zoom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs, Zoom } from 'swiper'
import Image from 'next/image'

const ClientCard = ({ icon }) => {
  return (
    <div className="clientCard">
      <div className="icon">
        <Image src={icon} alt="Microsoft" width={100} height={100} objectFit="contain" />
      </div>
    </div>
  )
}
export default function ClientsModule(props: any) {
  return (
    <div className="clientsModule container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-12 content-side">
            <div className="sub-section">
              <ThreeLinesIcon /> <p>Clients</p>
            </div>
            <h4 className="secondary-h1 main-color">People who put their trust on US!</h4>
          </div>
        </div>
      </div>
      <div className="col-md-12 ">
        <div className="clients-container">
          <Swiper
            style={{
              // @ts-ignore: Unreachable code error
              '--swiper-navigation-color': '#212529',
              '--swiper-pagination-color': '#212529',
            }}
            slidesPerView={7.5}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper2"
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 7.5,
              },
            }}
          >
            <SwiperSlide>
              <ClientCard icon="/logos/1.png" />
            </SwiperSlide>

            <SwiperSlide>
              <ClientCard icon="/logos/2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <ClientCard icon="/logos/3.png" />
            </SwiperSlide>
            <SwiperSlide>
              <ClientCard icon="/logos/4.png" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
