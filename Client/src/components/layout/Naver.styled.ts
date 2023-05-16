import { styled } from "styled-components";

export const NavbarBefore = styled.div`
    width: var(--main-width);
    height: 112px;
    overflow: hidden;
    background-color: var(--neutre-White);
    position: absolute;
    left: var(--main-left);
    top: 0px;
`;

export const Nico = styled.img`
    position: absolute;
    width: 140px;
    height: 83.38px;
    left: 154px;
    top: 14.31px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 90px;
`;

export const Frame6 = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
    gap: 36px;
    box-sizing: border-box;
    position: absolute;
    top: 0px;
    right: 68px;
    width: 624px;
    height: 112px;
`;

export const Frame5 = styled.div`
    width: 180px;
    height: 112px;
    overflow: hidden;
    background-color: var(--neutre-White);
    position: relative;
`;

export const About = styled.span`
    position: absolute;
    width: 87px;
    height: 42px;
    left: calc(50% - 87px / 2 + 0.5px);
    top: calc(50% - 42px / 2);
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    text-align: center;
    color: var(--neutre-Black);
`;

export const Blockchain = styled.span`
    position: absolute;
    width: 158px;
    height: 42px;
    left: calc(50% - 158px / 2);
    top: calc(50% - 42px / 2);
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    text-align: center;
    color: var(--neutre-Black);
`;

export const Frame1 = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    flex: none;
    gap: 10px;
    border-radius: 40px;
    background-color: rgb(193, 116, 255);
    box-sizing: border-box;
    padding: 10px 48px;
`;

export const SignIn = styled.span`
    width: 96px;
    height: 42px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    text-align: center;
    color: white;
    flex: none;
    order: 0;
    flex-grow: 0;
`;
