import { useTranslation } from 'next-i18next'
import Link from 'next/link'

export default function SidebarOrg(props: any) {
  const { t } = useTranslation()
  return (
    <div className="sidebar">
      <ul className="lp_category-list">
        <li className="lp_category-list__item">
          <Link href={'/'}>
            <p>{t('HOME')}</p>
          </Link>
        </li>
        <li className="lp_category-list__item">
          <Link href="/flash-sale">
            <p>{t('FLASH-SALE')}</p>
          </Link>
        </li>
        <li className="lp_category-list__item">
          <Link href="/new-in">
            <p>{t('NEW-IN')}</p>
          </Link>
        </li>
        <li className="lp_category-list__item">
          <Link href="trending">
            <p>{t('TRENDING')}</p>
          </Link>
        </li>
        {/* <li className="lp_category-list__item">
        <p>Sale</p>
        <ul className="lp_category-list__mega-menue">
          <li>
            Women <i className="fa fa-angle-right"></i>
          </li>
          <li>Men</li>
        </ul>
      </li> */}
      </ul>
    </div>
  )
}
