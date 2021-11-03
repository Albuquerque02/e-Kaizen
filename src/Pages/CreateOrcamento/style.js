import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 5%;
  width: 90%;
  height: 70%;
  background: #fff;
  box-shadow: 0px 3px 12px -3px rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%);

  h2 {
    margin-left: 0.5rem;
  }
`

export const Hr = styled.div`
  width: 100%;
  height: 0.2rem;
  background-color: #e5f0f7;
`
export const Content = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  position: relative;

  form {
    width: 80%;
  }
`

export const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  input {
    border: 1px solid #18a4f4;
    border-radius: 4px;
    height: 20px;

    select {
      margin-left: 20px !important;
    }
  }
`

export const Content1 = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Content2 = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Content3 = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Content4 = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Content5 = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Label = styled.label`
  font-weight: bolder;
`

export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
`
