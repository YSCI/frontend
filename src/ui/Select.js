import React from 'react'
import ReactSelect from 'react-select'
import { withTheme } from 'styled-components';

const colourStyles = (theme) => ({
  control: (styles, { isFocused, menuIsOpen }) => ({
    ...styles,
    backgroundColor: 'white',
    outline: 'none',
    boxShadow: 'none',
    borderColor: menuIsOpen ? '#087370': '#d4d4d4',
    borderWidth: '2px',
    minHeight: '44.8px',
    ':hover': {
      ...styles['hover'],
      borderColor: '#087370',
    }
  }),
  menuList: (styles) => ({
    ...styles,
    zIndex: '100',
    '::-webkit-scrollbar': {
      width: '7px'
    },
    '::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 5px #eeeeee',
      borderRadius: "10px"
    },
    '::-webkit-scrollbar-thumb': {
      background: theme.colors.green,
      borderRadius: '10px'
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: theme.colors.lightGreen
    }
  }),
  option: (styles, { isDisabled, isSelected }) => {
    return {
      ...styles,
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      backgroundColor: isSelected ? 'rgba(8,115,112,0.50)' : '#fff',
      zIndex: '20',
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
  placeholder: (styles) => ({
    ...styles,
    fontSize: '14px',
    color: theme.colors.lightGray
  }),
  singleValue: (styles) => ({ ...styles, fontFamily: 'Arial', fontSize: '14px' }),
})


export const Select = withTheme(({
  theme,
  options,
  ...rest
}) => {
  return (
    <ReactSelect
      {...rest}
      options={options}
      isClearable={true}
      className='React-Select'
      styles={colourStyles(theme)}
    />
  )
})