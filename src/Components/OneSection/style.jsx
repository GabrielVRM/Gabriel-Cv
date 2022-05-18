import styled from '@emotion/styled'

export const GridStyle = styled.div`
  border-radius: 100px;

  @keyframes scannig {
    from {
      width: 0;
    }
    to {
      width: 17.5em;
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
  letter-spacing: 15px;
  border-right: 2px solid rgba(0, 0, 0, 0.75);
  animation: cursor 600ms steps(60) infinite normal,
    scannig 4s 2s steps(60) infinite normal;
  white-space: nowrap;
  overflow: hidden;
`;
 export const Img = styled.img`
   animation: rotate 1.5s infinite linear;
   
 `;
