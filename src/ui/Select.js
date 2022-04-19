import React from 'react'
import ReactSelect from 'react-select'
import styled, { withTheme } from 'styled-components';

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
  input: (styles) => ({ ...styles, zIndex: 10 }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: '14px',
    color: theme.colors.lightGray
  }),
  singleValue: (styles) => ({ ...styles, fontFamily: 'Arial', fontSize: '14px' }),
})


export const Select = withTheme(({
  theme,
  value,
  options,
  placeholder,
  ...rest
}) => {
  return (
    <SelectContainer>
      {
        value &&
          <Placeholder>
            { placeholder }
          </Placeholder>
      }
      <ReactSelect
        {...rest}
        value={value}
        placeholder={placeholder}
        options={options}
        isClearable={true}
        className='React-Select'
        styles={colourStyles(theme)}
      />
    </SelectContainer>
  )
})

const SelectContainer = styled.div`
  position: relative;

  > div > div > div{
    &:last-child {
      z-index: 10;
    }
  }
`

const Placeholder = styled.div`
  position: absolute;
  z-index: 1;
  background: #fff;
  font-size: 13px;
  top: -10px;
  left: 10px;
  color: #B8BCCA;
  font-weight: 500;
`