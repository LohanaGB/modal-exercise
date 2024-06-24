import styled from "styled-components";

export const Home = styled.div `
    background: #39afa2;
    width: 700px;
    margin: 0 auto;
    margin-top: 100px;
    box-shadow: 1px 2px 3px #24645D;
    border-radius: 5px;
    text-align: center;
    font-size: 20px;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .open {
        margin: 20px auto 0 auto;
        border: 1px solid rgba(18, 168, 161, 0.3);
        border-radius: 7px;
        padding: 9px;
        font-size: 15px;
        font-weight: bold;
        color: #244541;
        &:hover {
            cursor: pointer;
            background: #244541;
            color: #fff;
            transition: all 0.5s;
        }
    }
`
