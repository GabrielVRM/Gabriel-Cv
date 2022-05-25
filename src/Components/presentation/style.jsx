import styled from '@emotion/styled'

export const GridStyle = styled.div`
  border-radius: 100px;

  @keyframes scannig {
    from {
      width: 0;
    }
    to {
      width: 22.5em;
    }
  }

  @keyframes cursor {
    from {
      border-right-color: rgba(23, 22, 22, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }

  @keyframes rotate {
    0% {
      transform: translate(0%) rotate(0deg);
    }
    100% {
      transform: translate(0%) rotate(360deg);
    }
  }
@media (max-width: 375px){
  div{
width: 100%;

    @keyframes scannig {
    from {
      width: 0;
    }
    to {
      width: 10em;
    }
  }  }
}

`

export const Typography = styled.div`
  font-family: 'Raleway', sans-serif;
  letter-spacing: 15px;
  

`

export const TypographyCursor = styled.div`
  font-family: 'Raleway', sans-serif;
  letter-spacing: 15px;
  /* border-right: 2px solid rgba(0, 0, 0, 0.75); */
  animation: cursor 500ms steps(30) infinite normal,
    scannig 4s 4s steps(100) infinite normal;
  white-space: nowrap;
   overflow: hidden;
   @media (max-width:372px){
     div{
       background-color: black;
     }

   }
   
  

`;
 export const Img = styled.img`
   animation: rotate 1.5s infinite linear;
   @media (max-width:900px){
    Img{
       background-color: black;
     }
   }
 `;

 export const TypographyFront = styled.div`
  font-family: 'Raleway', sans-serif;
  letter-spacing: 25px;
  text-align: center;
  
 `;
 export const Tag = styled.div`
 margin-top: 150px;
 text-align: center;
 margin-bottom: 100px;
 font-family: Raleway, sans-serif;
 font-size: 60px;
 
 `;
