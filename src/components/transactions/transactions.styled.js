import styled from 'styled-components';

export const Table = styled.table`
    border-collapse: collapse;
    width: 500px;
    box-shadow: 0 5px 7px -1px rgba(51,51,51,.23);

}
`
export const Title = styled.th`
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
    background-color: #f2f2f2;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    color: ${p => p.theme.colors.accent};

`
export const Text = styled.td`
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
    background-color: #D6EAF8; 

`
