import styled from "styled-components";

export const Overlay = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
`
export const Modal = styled.div `
    position: fixed;
    background: #fff;
    height: 300px;
    width: 300px;
    border-radius: 7px;
    padding-top: 120px;
    font-size: 20px;
    top: 40%;
    left: 40%;
    transition: translate(-50%, -50%);
    text-align: center;
    z-index: 3;
    .close {
        margin: 20px auto;
        border: 2px solid rgba(18, 168, 161, 0.8);
        border-radius: 7px;
        padding: 9px;
        font-size: 15px;
        font-weight: bold;
        color: #244541;
        background: #244541;
        color: #fff;
        &:hover {
            cursor: pointer;
            background: #fff;
            color: #244541;
            transition: all 0.5s;
    }
`