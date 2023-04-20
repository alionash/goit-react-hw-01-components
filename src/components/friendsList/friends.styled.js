import styled from 'styled-components';

export const FriendList = styled.ul`
    // margin: 20px;
`

export const Item = styled.li`
    width: 250px;
    align-items: center;
    justify-content: center;

    border: 1px solid #e3e3e3;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    background-color: ${p => p.theme.colors.white};
    display: flex;
    gap: 20px;

    margin: 20px;
    padding: 15px;

`
export const Name = styled.p`
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    color: ${p=> p.theme.colors.accent};
`
export const Status = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${p => {
    return p.isOnline ? p.theme.colors.online : p.theme.colors.offline
    }}; 

`