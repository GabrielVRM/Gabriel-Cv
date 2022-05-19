import styled from '@emotion/styled'

export const DivImage = styled.div`
  width: 100%;
  max-width: 600px;
  column-count: 3;
  height: 100%;
  gap: 100px;
  padding: 30px 40px 10px;
 

  
   @media (max-width:607px) {
    div {
      width: 80px;
      padding: 5px 5px 30px 20px;
      float: right;
      text-align: center;
      margin: -5px;
    

      

    }
  } 

  @media (min-width:618px) {
    div {
      width: auto;
      min-width: auto;
      

    }
  } 
`
