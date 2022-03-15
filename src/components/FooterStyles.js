import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 10px;
  background: #131d47;
  position: relative;
  bottom: 0;
  
   
  @media (max-width: 960px) {
    padding: 10px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 800px;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: left;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
  align-items: center;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(150px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 0px;
  font-size: 16px;
  text-decoration: none;
   
  &:hover {
      color: #9aeced;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 15px;
  font-weight: bold;
`;