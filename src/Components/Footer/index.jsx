import { Grid, Link, Typography } from '@mui/material'
import { Footer,Img } from './style'
import { motion } from 'framer-motion'
import { styled } from '@mui/material/styles';
import Gabriel from '../../Img/Gabriel.jpg';



export default function SectionFour () {
  // const { scrollYProgress } = useViewportScroll()
  // const framerOpacity = useTransform(scrollYProgress, [1,0], [0.1, 0.9])
  // const frameScale = useTransform(scrollYProgress, [1, 0.9], [0.2, 0.9])

  //Segundo Motion
  // const framerOpacitySecond = useTransform(scrollYProgress, [0.3, 0], [0, 1])
  // const frameScaleSecond = useTransform(scrollYProgress, [1, 0.1], [0.1, 0.7])
  const Root = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
fontSize:'',
},
    [theme.breakpoints.up('md')]: {
      fontSize:'90px'

    },
    [theme.breakpoints.up('lg')]: {
      fontSize:'180px'

    },
  }));
  return (
    <Footer>
        <Grid container xs={12} sm={12} mt={30} justifyContent='center'>
        <Grid item xs={12} sm={6} lg={4} md={4} style={{ marginTop:'40px' }}>
      <Root>
          <Typography style={{  fontSize:'25px' ,color: 'white', fontWeight:'bold' , fontFamily:'Raleway'}}>
          Contato
          </Typography>
          </Root>
          <Typography style={{ fontSize: '17px', color: 'white' , fontFamily:'Raleway' }}>
            (11)946362595
          </Typography>
          <Typography style={{ fontSize: '17px', color: 'white' , fontFamily:'Raleway'}}>
            Rua Geraldo do Brumado - Grajaú
          </Typography>
          <Link
            underline='none'
            color={'rgba(255, 255, 255, 0.87)'}
            fontSize='15px'
            fontFamily='Raleway, sans-serif;'
            href="malito:https://mail.google.com/mail/u/1/#inbox? subject= subject text"
          >
            gabriel.vieira2595@gmail.com
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} md={4} style={{ marginTop:'40px' }}>
          <Typography style={{ fontSize: '25px', color: 'white', fontWeight:'bold', fontFamily:'Raleway' }}>
            Informações Pesoais
          </Typography>
          <Typography style={{ fontSize: '17px', color: 'white', fontFamily:'Raleway' }}>
            Solteiro
          </Typography>
          <Typography style={{ fontSize: '17px', color: 'white', fontFamily:'Raleway' }}>
            20 anos
          </Typography>
          <Typography style={{ fontSize: '17px', color: 'white', fontFamily:'Raleway' }}>
            Preto
          </Typography>
          <Typography style={{ fontSize: '17px', color: 'white', fontFamily:'Raleway' }}>
            Masculino
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}  lg={4} md={4} style={{ marginTop:'40px' }}>
          <Typography style={{ fontSize: '30px', color: 'white', fontWeight:'bold' }}>
            Redes Sociais
          </Typography>
          <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 1.8 }}>
          <Link
            underline='none'
            color={'rgba(255, 255, 255, 0.87)'}
            fontSize='17px'
            fontFamily='Raleway, sans-serif;'
            href='https://github.com/GabrielVRM'
          >
            GitHub
          </Link>
          </motion.div>
          <br />
          <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 1.8 }}>
          <Link
            underline='none'
            color={'rgba(255, 255, 255, 0.87)'}
            fontSize='17px'
            fontFamily='Raleway, sans-serif;'
            href='https://www.linkedin.com/feed/'
            >
            Linkedin
          </Link>
          </motion.div>
        </Grid>
         <Grid item xs={12} sm={12} lg={3} textAlign='center' style={{ marginTop: '30px' }}>
         <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <Img
            src={Gabriel}
            style={{
                borderRadius: '500px',
                maxWidth: '100%',
                width: '150px',
                
              }}
              />
              </motion.div>
            </Grid>
      </Grid>
           
    </Footer>
  )
}

