import React from 'react'
export default function TextAreaInput({ label, name, error, value, emit }) {
  return (
    <div className={`lp_input_wrapper form-group ${error[name] && 'is-invalid'}`}>
      <label>{label}</label>
      <textarea
        onChange={e => emit(e.target.value)}
        name={name}
        value={value}
        className={`form-control lp_input ${error[name] && 'is-invalid'}`}
      ></textarea>
      {error[name] && <span className="error invalid-feedback"> {error[name].message}</span>}
    </div>
  )
}

TextAreaInput.defaultProps = {
  label: 'textInput',
  name: 'name',
  error: {
    name: false,
  },
  emit: e => console.log(e),
  value: '',
}
