import styled from "styled-components";

export const Container = styled.div`
    margin-top:5%;
    width: 90%;
    height: 70%;
    background: #fff;
    box-shadow: 0px 3px 12px -3px rgba(0, 0, 0, 0.5);
    border-radius: .5rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%);

    h2{
        margin-left: .5rem;
    }
`

export const Hr = styled.div`
width: 100%;
height: .2rem;
background-color: #E5F0F7;
`

export const Content = styled.div`
margin: 5% auto 10% auto;
width: 95%;
height: 80%;
`

export const Table = styled.table`
border: 2px solid;
width: 100%;

tr:nth-child(even) {
  background:#E5F0F7;
}
`

export const Tr = styled.tr`    
`

export const Th = styled.th`

`

export const Button = styled.button`
        width: 100%;
        font-weight:bolder;
        font-size: 30px;
        background: #2360B1;
        border: 0;
        border-radius: .25rem;
        color: white;
        cursor: pointer;
        transition: all .3s linear;
        &:hover {
            opacity: 90%;
        }
`

export const Td = styled.th`

`