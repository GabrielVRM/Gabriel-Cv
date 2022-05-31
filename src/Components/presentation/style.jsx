import styled from '@emotion/styled'

export const GridStyle = styled.p`
  border-radius: 100px;

   @media (max-width: 400px) {
    div {
font-size: 50px;
margin: 25px;

    }
  } 

  @keyframes scannig {
    from {
      width: 0;
    }
    to {
      width: 10em;
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

`

export const Typography = styled.div`
  font-family: 'Raleway', sans-serif;
  letter-spacing: 15px;
`

export const TypographyCursor = styled.div`
  font-family: 'Raleway', sans-serif;
  letter-spacing: 10px;
  /* border-right: 2px solid rgba(0, 0, 0, 0.75); */
  /* animation: cursor 500ms steps(30) infinite normal,
    scannig 4s 2s steps(100) normal; */
  white-space: nowrap;
  overflow: hidden;

`
export const Img = styled.img`
  animation: rotate 3s infinite linear;
  @media (max-width: 900px) {
    img {
      background-color: black;
    }
  }
`

export const TypographyFront = styled.div`
  font-family: 'Raleway', sans-serif;
  letter-spacing: 25px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
`
export const Tag = styled.div`
  margin-top: 0px;
  text-align: center;
  font-family: Raleway, sans-serif;
  font-size: 60px;
`
export const GridFront = styled.div`
  @media (max-width: 375px) {
    div {
      font-family: Raleway, sans-serif;
      white-space: normal;
      width: 100% ;
      letter-spacing: 10;

      

    }
  }
`
