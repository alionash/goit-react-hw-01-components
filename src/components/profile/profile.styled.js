import styled from 'styled-components';

export const ProfileContainer = styled.div`
    width: 350px;
    height: 450px;
    border: 1px solid ${p => p.theme.colors.silver};
    border-radius: 10px;


    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`
export const Description = styled.div`
background-color: ${p => p.theme.colors.white};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
width: 100%; 
padding-bottom: 10px;
padding-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
`


export const ProfilePhoto = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid ${p => p.theme.colors.silver};
    object-fit: cover;
`
export const Name = styled.p`
    font-weight: 600;
    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: ${p => p.theme.colors.accent};
`
export const Links = styled.p`
    color: #AEB6BF;
    font-size: 15px;
` 
export const Stats = styled.ul`
    border-top: 1px solid #e3e3e3;
    display: flex;
    width: 350px;
    margin: 0;
    padding: 0;
    border: 1px solid${p => p.theme.colors.accent};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

` 

export const Item = styled.li`
      text-align: center;
  padding: 20px;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  color: ${p => p.theme.colors.accent};
}

`
