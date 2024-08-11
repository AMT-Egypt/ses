import { useTranslation } from 'next-i18next'
import React from 'react'
export default function TextInput({ label, name, error, value, emit, type }) {
  const { t } = useTranslation()
  return (
    <div className={`lp_input_wrapper form-group ${error[name] && 'is-invalid'}`}>
      <label>{label}</label>
      <input
        type={type}
        onChange={e => emit(e.target.value)}
        name={name}
        value={value}
        className={`form-control lp_input ${error[name] && 'is-invalid'}`}
      />
      {error[name] && <span className="error invalid-feedback"> {t(error[name].message)}</span>}
    </div>
  )
}

TextInput.defaultProps = {
  label: 'textInput',
  name: 'name',
  type: 'text',
  error: {
    name: false,
  },
  emit: e => console.log(e),
  value: '',
}
