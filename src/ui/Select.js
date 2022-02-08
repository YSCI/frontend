import React from 'react'
import ReactSelect from 'react-select'

const colourStyles = {
  control: (styles, { isFocused, menuIsOpen }) => ({
    ...styles,
    backgroundColor: 'white',
    outline: 'none',
    boxShadow: 'none',
    borderColor: menuIsOpen ? '#087370': '#d4d4d4',
    ':hover': {
      ...styles['hover'],
      borderColor: '#087370',
    }
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      cursor: isDisabled ? 'not-allowed' : 'default',
      backgroundColor: isSelected ? 'rgba(8,115,112,0.50)' : '#fff',
      ':hover': {
        ...styles[':hover'],
        backgroundColor: isSelected ? 'rgba(8,115,112,0.50)' : 'rgba(8,115,112,0.12)',
      },
      ':active': {
        ...styles[':active']
      },
    };
  },
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles, { data }) => ({ ...styles }),
};


export const Select = ({
  options,
  ...rest
}) => {
  return (
    <ReactSelect
      {...rest}
      options={options}
      styles={colourStyles}
      className='React-Select'
    />
  )
}