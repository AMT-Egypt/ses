// Import Swiper React components
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import HeartIcon from '../icons/heart'
import PlusIcon from '../icons/plus'
import Xicon from '../icons/Xicon'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import Badge from 'modules/molcules/badge'
import { useRouter } from 'next/router'

const VariantsComponent = ({ variants, displayedProduct, handleChangeVariants }) => {
  const [openExpander, setOpenExpander] = useState(false)
  const normalBehavior = () => (
    <ul>
      {variants.map((item, idx) => (
        <li
          key={idx}
          className={`${
            item?._id?.toString() == displayedProduct?._id?.toString() ? 'active' : ''
          }`}
          onClick={() => handleChangeVariants(item)}
        >
          <Image
            src={`https://img.lepce-core.com/media/${item?.images[0]?.name}?width=700&height=1000`}
            width="350"
            height="500"
            alt="me"
          />
        </li>
      ))}
    </ul>
  )

  const expandingBehavior = () => {
    const restArray = [...variants].splice(2, 2).map((item: any) => item.id)

    return (
      <>
        <ul>
          <li
            className={`${displayedProduct?._id?.toString() === variants[0].id ? 'active' : ''}`}
            onClick={() => handleChangeVariants(variants[0])}
          >
            <Image
              src={`https://img.lepce-core.com/media/${variants[0]?.images[0]?.name}?width=700&height=1000`}
              width="350"
              height="500"
              alt="me"
            />
          </li>
          <li
            className={`${displayedProduct?._id?.toString() === variants[1].id ? 'active' : ''}`}
            onClick={() => handleChangeVariants(variants[1])}
          >
            <Image
              src={`https://img.lepce-core.com/media/${variants[1]?.images[0]?.name}?width=700&height=1000`}
              width="350"
              height="500"
              alt="me"
            />
          </li>
          <li
            className={`${restArray.includes(displayedProduct?._id?.toString()) ? 'active' : ''}`}
          >
            <div className="btn-expander" onClick={() => setOpenExpander(old => !old)}>
              <span> +{parseInt(variants.length) - 2}</span>
            </div>
            <Image
              src={`https://img.lepce-core.com/media/${variants[2]?.images[0]?.name}?width=700&height=1000`}
              width="350"
              height="500"
              alt="me"
            />
          </li>
        </ul>
        <div className={`eva ${openExpander ? 'show' : 'false'}`}>
          <div className="close-btn" onClick={() => setOpenExpander(old => !old)}>
            {' '}
            <Xicon />{' '}
          </div>
          <div className="variants-switcher">
            <Swiper
              spaceBetween={3}
              slidesPerView={5}
              onSlideChange={() => console.log('slide change')}
              onSwiper={swiper => console.log(swiper)}
              className="swiper-switcher"
            >
              {variants.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className={`variant-button ${
                      displayedProduct?._id?.toString() === item.id ? 'active' : ''
                    }`}
                    onClick={() => handleChangeVariants(item)}
                  >
                    <Image
                      src={`https://img.lepce-core.com/media/${item?.images[0]?.name}?width=700&height=1000`}
                      width="40"
                      height="40"
                      alt="me"
                    />
                  </div>{' '}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="product-variants">
      {variants.length <= 3 ? normalBehavior() : expandingBehavior()}
    </div>
  )
}

export default function ProductCard(props: any) {
  const router = useRouter()
  const { siblings: relatedVariants, ...rest } = props.product
  const [displayedProduct, setDeisplayedProduct] = useState(rest)
  const handleChangeVariants = e => setDeisplayedProduct({ ...e, _id: e.id })
  const [variants, setVariants] = useState(relatedVariants.map(item => ({ ...item, _id: item.id })))
  const { t } = useTranslation()
  return (
    <div className="col-12 col-md-6">
      <div className="card lp-card ">
        <div className="card-header">
          {displayedProduct?.labels.map((item: any, key: any) => (
            <Badge key={key} text={t(item)} />
          ))}
        </div>
        <div className="card-body">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
            pagination={{
              type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {displayedProduct?.images?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Link href={`/product/${displayedProduct?.slug}`}>
                  <Image
                    src={`https://img.lepce-core.com/media/${item.name}?width=700&height=1000`}
                    width="350"
                    height="500"
                    alt={item.name}
                    layout="responsive"
                    // placeholder="blur"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="more-actions">
            <ul>
              <li>
                {' '}
                <HeartIcon />
              </li>
              <li>
                {' '}
                <PlusIcon />
              </li>
            </ul>
          </div>
        </div>
        <div className="card-footer">
          <div className="product-details">
            <div className="price-details">
              <span className="bfr-dscnt">
                {displayedProduct.comparePrice} {t('currency')}{' '}
              </span>
              <span className="price">
                {displayedProduct.price} {t('currency')}
              </span>
              <span className="prdct-name">
                {router.locale === 'en' ? displayedProduct.nameEn : displayedProduct.nameAr}
              </span>
            </div>
            <VariantsComponent
              handleChangeVariants={handleChangeVariants}
              displayedProduct={displayedProduct}
              variants={variants}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
