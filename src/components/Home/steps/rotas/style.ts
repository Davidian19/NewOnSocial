import styled from 'styled-components';
export const Itens = styled.div`
    width: 100%;
    margin: -200px 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: row;
    position: relative;
`;
export const Routes = styled.div`
    background-color: #FFF;
    border-radius: 15px;
    max-width: 500px;
    min-width: 350px;
    max-height: 500px;
    min-height: 150px;
`;
export const Title = styled.h1`
    background-color: #8C64FF;
    font-weight: 700;
    color: #fff;
    font-size: 15px;
    text-align: left;
    border-radius: 30px;
    padding-left: 15px;
    width: 120px;
    margin: 20px;

`;
export const RoutesName = styled.h1`
    margin-top: 20px;
    text-align: left;
    font-weight: 700;
    line-height: 1;
    color: #4B5C6B;
    font-size: 20px;
    padding-left: 50px;
    :hover{
        color: #8C64FF;
        transition: 0.3s;
    }
`;