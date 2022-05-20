import { motion } from 'framer-motion'
import { useViewportScroll, useTransform } from 'framer-motion'
import { Sticky } from '../../Styles/GlobalStyled'
import { Typography, GridStyle, TypographyCursor, Img, TypographyFront } from './style'
import { Grid } from '@mui/material'
import ReactIcon from '../../Img/React-icon.svg.png'

const SectionOne = () => {
  const { scrollYProgress } = useViewportScroll()
  const framerOpacity = useTransform(scrollYProgress, [0, 0.551], [0, 1])
  const frameScale = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  //Segundo Motion
  const framerOpacitySecond = useTransform(scrollYProgress, [0.3, 0], [0, 1])
  const frameScaleSecond = useTransform(scrollYProgress, [1, 0.1], [0.1, 0.7])

  return (
    <>
      {/* -------------------- Segunda Section do Site -------------------------- */}

      <Sticky className='first'>
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100vh',
            opacity: framerOpacity,
            scale: frameScale,
            textAlign: 'center'
          }}
        >
          <Grid container xs={12} justifyContent='center' mt={20}>
                <TypographyFront style={{ fontSize: '40px', textAlign:'center', marginTop:'40px' }}>
                  <span style={{fontSize:'30px'}}>Front-end </span><br />
                  JavaScript React js
                </TypographyFront>
                <Img
                  src={ReactIcon}
                  style={{ width: '250px', marginTop: '0px' }}
                />
          </Grid>
        </motion.div>

        {/* -------------------- Primeira Section do Site -------------------------- */}

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
          <Grid container xs={12} justifyContent='center'>
            <GridStyle>
              <TypographyCursor style={{ fontSize: '70px' }}>
                Gabriel Vieira Reis Maximo
              </TypographyCursor>
              <Typography style={{ fontSize: '80px',  }}>Developer</Typography>
            </GridStyle>
          </Grid>
        </motion.div>
      </Sticky>
    </>
  )
}

export default SectionOne
