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


export const GridDiv = styled.div`
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    margin-top: 4rem;
`;

export const Date = styled.span`
    color: #767676;
    font-size: 14px;
    margin-left: 10px;
    line-height: 21px;
    font-weight: 400;
    @media (max-width:400px){
        line-height: 16px;
    }
`;

export const PostTitle = styled.div`
    color: #767676;
    margin-top: 10px;
`;

export const PostBody = styled.div`
    margin-top: 18px;
    line-height: 1.6;
    overflow: hidden;
`;


export const PostCard = styled.div`
    box-shadow: 0 16px 28px hsl(0deg 0% 92% / 80%);
    margin: 0 0 1.25rem!important;
    width: 380px!important;
    height: 300px;
    cursor: pointer;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform;
    transition-timing-function: linear;
    transition-duration: .15s;
    -webkit-transform: translateY(0);
    transform: translateY(0);
    background: white;
    border-radius: 0.5rem;
    --bg-opacity: 1;position: relative;
    display: block;\outline: 2px solid transparent;
    outline-offset: 2px;
    padding: 1.5rem;
    align-items: flex-start;
    flex-direction: column;
    display: flex;
    
`;