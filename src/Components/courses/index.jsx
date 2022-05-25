import { Grid, Typography, Link } from '@mui/material'
import { Sticky } from '../../Styles/GlobalStyled'
import {Global} from './styled'
import CertificadoHavard from '../../Img/CertificadoHavard.png'

export default function Courses () {
  return (
    <Global>
      
      <Sticky>
      <Grid container  justifyContent='center' >
    <Grid item  textAlign='center' >
      <Typography
        style={{
          fontFamily: 'Raleway',
          fontSize: '40px',
          marginBottom: '40px'
        }}
      >
        Cursos Realizados
      </Typography>
      <Typography style={{ fontFamily: 'Raleway', fontSize: '22px', marginBottom:'25px' }}>
     Havard - introdução a Ciencias da Computação <br/>
      <Link underline="hover"   onClick={()  => {
console.log('hello' )
      }}  href={CertificadoHavard} style={{fontFamily:'Raleway'}}>Certificado Havard</Link>
      </Typography>
      <Typography style={{ fontFamily: 'Raleway', fontSize: '22px', marginBottom:'25px' }}>
        JavaScript - Udemy{' '}
        <span style={{ fontSize: '20px', color:'red'  }}>em andamento</span>
      </Typography>
      <Typography style={{ fontFamily: 'Raleway', fontSize: '22px', marginBottom:'25px' }}>
        Wise Up Online <span style={{ fontSize: '20px', color:'red' }}>em andamento</span>
      </Typography>
      <Typography style={{ fontFamily: 'Raleway', fontSize: '22px', marginBottom:'25px' }}>
        Power Bi - udemy <span style={{ fontSize: '20px', color:'green' }}>concluido</span>
      </Typography>
      <Typography style={{ fontFamily: 'Raleway', fontSize: '22px', marginBottom:'25px' }}>
        React - Udemy <span style={{ fontSize: '20px', color:'red' }}> em andamento </span>
      </Typography>
      <Typography style={{ fontFamily: 'Raleway', fontSize: '22px', marginBottom:'25px' }}>
        Typescript - Udemy{' '}
        <span style={{ fontSize: '20px', color:'red' }}> em andamento </span>
      </Typography>
    </Grid>
    </Grid>
      </Sticky>
      </Global>


)

}
