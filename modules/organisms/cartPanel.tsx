import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function CartPanel({ items }: any) {
  const { t } = useTranslation()
  const router = useRouter()
  const constructDetails = item => {
    return (
      <div className="cart-item-details">
        <span className="item-name text-truncate">
          {router.locale === 'en' ? item?.nameEn : item?.nameAr}
        </span>
        <span className="item-options">
          {router.locale === 'en' ? item?.option1?.value?.nameEn : item.option1?.value?.nameAr} |{' '}
          {router.locale === 'en' ? item?.option2?.value?.nameEn : item.option2?.value?.nameAr}
        </span>
        <span className="item-sku">
          {t('sku')} : {item?.sku}
        </span>
        <span className="item-sku">
          {t('quantity')} : {item?.quantity}
        </span>
      </div>
    )
  }
  return (
    <div className="cart-panel">
      {items?.map((item: any, idx: any) => (
        <div key={idx} className="cart-item">
          <div className="cart-item__image">
            <div className="cart-image">
              <Image
                src={`https://img.lepce-core.com/media/${item?.image?.name}?width=700&height=1000`}
                width="50"
                height="75"
                style={{ objectFit: 'cover' }}
                alt="me"
              />
            </div>
          </div>
          <div className="cart-item__details">
            {constructDetails(item)}
            <div className="price">
              {item.discount > 0 && (
                <span className="discount">
                  {item.totalPrice} {t('currency')}
                </span>
              )}
              <span>
                {item.presentPrice} {t('currency')}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
