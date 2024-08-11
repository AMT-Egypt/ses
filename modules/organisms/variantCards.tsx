import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function VariantCards(props) {
  const router = useRouter()
  return (
    <div className="product-variants">
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation]}
        navigation={true}
        style={{}}
      >
        {props?.variants?.map(
          (item, idx) =>
            item.status === 'PUBLISHED' && (
              <SwiperSlide key={idx}>
                <Link href={`/product/${item?.slug}`}>
                  <a className={`variant-card ${props.productId === item.id && 'active'}`}>
                    <div className="card-head">
                      <Image
                        src={`https://img.lepce-core.com/media/${item.images[0].name}?width=140&height=200`}
                        width="70"
                        height="100"
                        alt={item.images[0].name}
                      />
                    </div>
                    <div className="card-footer">
                      <span>
                        {router.locale === 'en'
                          ? item.option1.nameEn.toUpperCase()
                          : item.option1.nameAr.toUpperCase()}
                      </span>
                    </div>
                  </a>
                </Link>
              </SwiperSlide>
            ),
        )}
      </Swiper>
    </div>
  )
}
