import styled from 'styled-components'

export const InputPrimary = styled.input`
  position: relative;
  display: flex;
  padding: 16px;
  align-items: center;
  width: 100%;
  height: 3rem;
  white-space: nowrap;
  background: none;
  border: none;
  outline: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.text1};
  border-width: 1px;
  border-color: ${({ theme }) => theme.bg3};
  border-style: solid;
  -webkit-appearance: none;
  font-size: 1rem;
  transition: border-color .2s cubic-bezier(.645, .045, .355, 1);

  :hover {
    border-color: ${({ theme }) => theme.bg4};
  }

  :focus {
    border-color: ${({ theme }) => theme.primary1};
  }

  ::placeholder {
    color: ${({ theme }) => theme.text3};
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.text4};
  }
`
