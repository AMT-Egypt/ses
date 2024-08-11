import React, { useEffect } from 'react'
import Select from 'react-select'

export default function SelectInput({ label, name, error, value, emit, moreProps, options }) {
  const style = {
    control: (base, state) => ({
      ...base,
      outline: 'unset',
      border: '1px solid rgb(171, 171, 171)',
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      '&:hover': {
        border: '1px solid rgb(63, 63, 63)',
      },
    }),
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isSelected ? 'rgb(213, 213, 213)' : '',
      color: 'black',
      '&:hover': {
        // overriding hover
        backgroundColor: 'rgb(213, 213, 213)',
      },
    }),
  }

  return (
    <div className={`lp_input_wrapper form-group ${error[name] && 'is-invalid'}`}>
      <label>{label}</label>
      <Select
        onChange={(e: any) => emit(e.value)}
        options={options}
        styles={style}
        value={value}
        name={name}
        {...moreProps}
      />
      {error[name] && (
        <span className="d-block error invalid-feedback"> {error[name].message}</span>
      )}
    </div>
  )
}

SelectInput.defaultProps = {
  label: 'textInput',
  name: 'name',
  type: 'text',
  error: {
    name: false,
  },
  emit: e => console.log(e),
  value: {
    label: 'test',
    value: 'test',
  },
  options: [
    {
      label: 'test',
      value: 'test',
    },
  ],
  moreProps: {
    isDisabled: false,
    isLoading: false,
    isClearable: false,
    isRtl: false,
    isSearchable: false,
  },
}
