import styled from 'styled-components';

export const StatisticsContainer = styled.section`
    margin-top: 30px;
    width: 500px;
    height: 140px;
    border: 1px solid ${p => p.theme.colors.silver};
    border-radius: 10px;


    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    background-color: ${p => p.theme.colors.white};
    
`
export const Stats = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 0;
    padding: 0;
    border-top: 1px solid #e3e3e3;
`
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    padding: 10px;
`

export const Title = styled.h2`
    color: ${p=> p.theme.colors.accent};
`

export const Percentage = styled.span`
font-weight: 800;
font-size: 16px;
color: ${p=> p.theme.colors.black};
`
export const Label = styled.span`
font-weight: 600;
font-size: 18px;
color: ${p=> p.theme.colors.accent};
`