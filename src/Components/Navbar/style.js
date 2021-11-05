import styled from "styled-components";

export const Nav = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
height: 10%;
background-color: white;
text-align: center;
`

export const Logo = styled.div `
display: flex;
justify-content: flex-start;
width: 50%;

img{
    width: 120px;
    height: 100px;
}

h1{
    margin-top: 1.6rem;
}
`

export const User = styled.div`
display: flex;
justify-content: flex-end;
width: 50%;

h1{
    margin-top: 1.6rem;
    margin-right: 1.3rem;
}

`