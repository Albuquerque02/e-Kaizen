import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  position: absolute;
  font-weight: bolder;
  margin-top: 20px;
  background: #c22a40;
  border: 0;
  border-radius: 0.25rem;
  padding: 0.6rem 0.5rem;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    opacity: 90%;
    transform: scale(1.1);
  }
`
