import styled from "styled-components";

export const Button = styled.button`
        font-weight:bolder;
        margin-top: 20px;
        background: #c22a40;
        border: 0;
        border-radius: .25rem;
        padding: .6rem .5rem;
        color: #fff;
        text-transform: uppercase;
        cursor: pointer;
        transition: all .3s linear;
        &:hover {
            opacity: 90%;
            transform: scale(1.1);
        }
`