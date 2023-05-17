import { styled } from "styled-components";

export const MyDashboard = styled.span`
    color: rgb(60, 60, 64);
    text-overflow: ellipsis;
    font-size: 16px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    text-align: left;
    position: absolute;
    left: 155px;
    top: 172px;
    width: 119px;
    height: 24px;
    line-height: 24px;
    color: var(--neutre-Grey-300);
`;

export const Tag = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
    border-radius: 12px;
    box-sizing: border-box;
    padding: 16px 24px;
    position: absolute;
    left: 214px;
    top: 237px;
    width: 112px;
    height: 62px;
    background-color: var(--neutre-Grey-100);
    &:hover {
        background-color: var(--neutre-Grey-200);
    }
`;

export const Tag_0001 = styled(Tag)`
    left: 342px;
    width: 125px;
`;

export const Tag_0002 = styled(Tag)`
    left: 483px;
    width: 194px;
`;

export const MyProfile = styled.span`
    color: white;
    text-overflow: ellipsis;
    font-size: 20px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    text-align: left;
    height: 30px;
    line-height: 30px;
`;

export const Rectangle42 = styled.div`
    width: 1614px;
    height: 435px;
    background-color: rgb(254, 252, 201);
    border-radius: 80px;
    position: absolute;
    left: 155px;
    top: 311px;
`;
