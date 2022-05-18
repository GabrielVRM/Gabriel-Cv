import { motion } from 'framer-motion'
import { useViewportScroll, useTransform } from 'framer-motion'
import { Sticky } from '../../Styles/GlobalStyled'
import { Typography, GridStyle, TypographyCursor, Img } from './style'
import { Grid } from '@mui/material'
import ReactIcon from '../../Img/React-icon.svg.png'
// criação de props //
// const Dados = {
//    name:'Gabrel',
//    Idade:'20 Anos',
//    Cargo: 'Developer',
//    Atuação: 'Front-End',

// };
const SectionOne = () => {
  const { scrollYProgress } = useViewportScroll()
  const framerOpacity = useTransform(scrollYProgress, [0, 0.551], [0, 1])
  const frameScale = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  //Segundo Motion
  const framerOpacitySecond = useTransform(scrollYProgress, [0.3, 0], [0, 1])
  const frameScaleSecond = useTransform(scrollYProgress, [1, 0.1], [0.1, 0.7])

  return (
    <>
      <Sticky className='first'>
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100vh',
            opacity: framerOpacity,
            scale: frameScale
          }}
        >
          <GridStyle style={{marginTop:'100px'}}>
          <Typography style={{ fontSize: '50px' }}>
                Front-end <br />
                JavaScript - React js
              </Typography>
            <Img
              src={ReactIcon}
              style={{ width: '300px', marginTop: '100px' }}
            />
          </GridStyle>
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100vh',
            opacity: framerOpacitySecond,
            scale: frameScaleSecond
          }}
        >
          <GridStyle justifyContent='center'>
            <TypographyCursor style={{ fontSize: '70px' }}>
              Gabriel Vieira Reis Maximo
            </TypographyCursor>
          </GridStyle>
           <Grid container xs={12} justifyContent='center' mt={0}>
            <Grid item xs={12}>
              <Typography style={{ fontSize: '80px' }}>Developer</Typography>
            </Grid>
          </Grid>
        </motion.div>
      </Sticky>
    </>
  )
}

export default SectionOne
