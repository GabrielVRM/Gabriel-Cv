import { Grid, Link } from '@mui/material'
import Gabriel from '../../Img/Gabriel.jpg'
import { Footer, Typography } from './style'
import { motion } from 'framer-motion'

export default function SectionFour () {
  // const { scrollYProgress } = useViewportScroll()
  // const framerOpacity = useTransform(scrollYProgress, [1,0], [0.1, 0.9])
  // const frameScale = useTransform(scrollYProgress, [1, 0.9], [0.2, 0.9])

  //Segundo Motion
  // const framerOpacitySecond = useTransform(scrollYProgress, [0.3, 0], [0, 1])
  // const frameScaleSecond = useTransform(scrollYProgress, [1, 0.1], [0.1, 0.7])

  return (
    <Footer>
      <Grid container xs={12}>
        <Grid item xs={4} style={{ marginTop: '50px' }}>
          <Typography style={{ fontSize: '40px', color: 'white' }}>
            Contato
          </Typography>
          <Typography style={{ fontSize: '20px', color: 'white' }}>
            20 Anos
          </Typography>
          <Typography style={{ fontSize: '20px', color: 'white' }}>
            Solteiro
          </Typography>
          <Typography style={{ fontSize: '20px', color: 'white' }}>
            (11)946362595
          </Typography>
          <Typography style={{ fontSize: '20px', color: 'white' }}>
            Rua Geraldo do brumado - Grajaú
          </Typography>
        </Grid>
        <Grid item xs={4} style={{ marginTop: '80px' }}>
          <Typography style={{ fontSize: '40px', color: 'white' }}>
            Redes Sociais
          </Typography>
          <Link
            underline='none'
            color={'rgba(255, 255, 255, 0.87)'}
            fontSize='20px'
            fontFamily='Raleway, sans-serif;'
            href='https://github.com/GabrielVRM'
          >
            GitHub
          </Link>
          <br />
          <Link
            underline='none'
            color={'rgba(255, 255, 255, 0.87)'}
            fontSize='20px'
            fontFamily='Raleway, sans-serif;'
            href='https://www.linkedin.com/feed/'
          >
            Linkedin
          </Link>
        </Grid>
        <Grid item xs={4} style={{ marginTop: '50px' }}>
          <motion.div whileHover={{ scale: 0.6 }} whileTap={{ scale: 1.8 }}>
            <img
              src={Gabriel}
              style={{
                borderRadius: '500px',
                maxWidth: '100%',
                width: '220px',
                padding: '10px'
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Footer>
  )
}

{
  /* <Grid container xs={12} justifyContent='center' mt={15}>
  <Grid item xs={7} mt={5} textAlign='center'>
    <Typography style={{ fontSize: '60px' }}>Contato</Typography>
    <Typography style={{ fontSize: '25px' }}>20 Anos</Typography>
    <Typography style={{ fontSize: '25px' }}>Solteiro</Typography>
    <Typography style={{ fontSize: '25px' }}>(11)946362595</Typography>
    <Typography style={{ fontSize: '25px' }}>
      Rua Geraldo do brumado - Grajaú
    </Typography>
    <Link
      underline='none'
      color={'rgba(0, 0, 0, 0.87)'}
      fontSize='25px'
      fontFamily='Raleway, sans-serif;'
      href='https://github.com/GabrielVRM'
    >
      GitHub
    </Link>
    <br />
    <Link
      underline='none'
      color={'rgba(0, 0, 0, 0.87)'}
      fontSize='25px'
      fontFamily='Raleway, sans-serif;'
      href='https://www.linkedin.com/feed/'
      >
      Linkedin
    </Link>
  </Grid>
  <Grid item xs={4} mt={15}>
    <img
      src={Gabriel}
      style={{
        borderRadius: '500px',
        maxWidth: '100%',
        width: '300px',
        padding: '0px'
      }}
      />
  </Grid>
</Grid>          */
}
