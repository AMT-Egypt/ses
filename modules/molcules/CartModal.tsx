import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import ReactModal from 'react-modal'

export default function CartModal({ show, toggle }: any) {
  const router = useRouter()
  return (
    <ReactModal
      isOpen={show}
      ariaHideApp={false}
      onRequestClose={toggle}
      className={`${router.locale === 'ar' ? ' rtl' : ''}`}
      style={{
        content: {
          maxWidth: '520px',
          width: '100%',
        },
      }}
    >
      <h1>Hello World </h1>
    </ReactModal>
  )
}
