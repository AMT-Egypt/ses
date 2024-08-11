import Image from 'next/image'
import { useState } from 'react'
import Modal from 'react-modal'
import CloseIcon from '../icons/closeIcon'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs, Zoom } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/zoom'

export default function ProductGallery(props) {
  const [thumbsSwiper, setThumbsSwiper]: any = useState<any>(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      padding: '0',
      marginRight: '-50%',
      backgroundColor: 'rgba(0,0,0,0.2)',
      transform: 'translate(-50%, -50%)',
    },
  }
  const closeModal = () => {
    setThumbsSwiper(null)
    setModalIsOpen(false)
  }

  return (
    <>
      <div className="d-none d-lg-block gallery-pack">
        <div className="large-screen-images ">
          {props?.images?.map(
            (item, idx) =>
              idx < 4 && (
                <div key={idx} onClick={() => setModalIsOpen(true)}>
                  <Image
                    src={`https://img.lepce-core.com/media/${item.name}?width=700&height=1000`}
                    width="370"
                    height="470"
                    alt={item.name}
                  />
                </div>
              ),
          )}
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Product Images"
          style={customStyles}
        >
          <div className="lp-product-card-modal">
            <div className="modal-head">
              <div className="modal-close-button">
                <button className="modal-close-button" type="button" onClick={closeModal}>
                  <CloseIcon />
                </button>
              </div>
            </div>

            <div className="modal-body">
              <Swiper
                style={{
                  // @ts-ignore: Unreachable code error
                  '--swiper-navigation-color': '#212529',
                  '--swiper-pagination-color': '#212529',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Zoom]}
                className="mySwiper2"
                zoom={true}
              >
                {props?.images?.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={`https://img.lepce-core.com/media/${item.name}?width=700&height=1000`}
                      alt={item.name}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Modal>
      </div>
      <div className="d-lg-none">
        <div className="small-screen-images">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
          >
            {props?.images?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="slider-image-wrapper">
                  <Image
                    src={`https://img.lepce-core.com/media/${item.name}?width=700&height=1000`}
                    height="500"
                    width="300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
