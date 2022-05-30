import styled from '@emotion/styled'

export const Global = styled.div`
@media(max-width: 600px) {
    div{
margin-top: 0px;
    }
}
`;

export const Tag = styled.div`
margin-top: -400px;
text-align: center;
margin-bottom: 100px;
font-family: Raleway, sans-serif;
font-size: 30px;
`; 

export const DivImage = styled.div`
  
  max-width: 600px;
  column-count: 3;
  height: 100%;
  gap: 50px;
  padding: 0px 20px 0px;
 
  
   @media (max-width:607px) {
    div {
      width: 70px;
padding:30px 0px ;
gap: 0px;
      
    }
  } 
  @media (min-width:618px) {
    div {
      width: 100px;
      padding:10px 0px 20px 10px;
      gap: 100px;
    }
  } 
  
`

export const TypographiaLanguage = styled.div`
`;