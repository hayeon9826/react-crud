import styled from 'styled-components';

export const Container = styled.div`
    --bg-opacity: 1;
    background-color: #f5f6fa;
    height: 150vh;
`;

export const PaddingContainer = styled.div`
    padding-top: 3.5rem;
    position: relative;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 0;
`;

export const Title = styled.h2`
    font-size: 21px;
    @media (max-width:400px){
        font-size: 16px;
    }
    font-weight: 700;
`;

export const FlexDiv = styled.div`
    justify-content: space-between;
    display: flex;
`;
