import { motion } from 'framer-motion'
import { useViewportScroll, useTransform } from 'framer-motion'
import { Sticky } from '../../Styles/GlobalStyled'
import {
  Typography,
  GridStyle,
  TypographyCursor,
  Img,
  TypographyFront,
  GridFront
} from './style'
import { Grid } from '@mui/material'
import ReactIcon from '../../Img/React-icon.svg.png'
import { Tag } from './style'

const SectionOne = () => {
  const { scrollYProgress } = useViewportScroll()
  const framerOpacity = useTransform(scrollYProgress, [0, 0.351], [0, 1])
  const frameScale = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  //Segundo Motion
  const framerOpacitySecond = useTransform(scrollYProgress, [0.3, 0], [0, 1])
  const frameScaleSecond = useTransform(scrollYProgress, [1, 0.1], [0.1, 0.7])
  const Code = 'code </>'
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
            textAlign: 'center',
            margin:0

          }}
        >
          <Grid container xs={12} justifyContent='center' mt={20}>
            <GridFront>
              <TypographyFront
                style={{
                  fontSize: '60px',
                  textAlign: 'center',
                  letterSpacing: 10
                }}
              >
                <span style={{ fontSize:"40px" }}>
                  Front-end{' '}
                </span>
                <br />
               
                  JavaScript ReactJS         
                  </TypographyFront>
              <Img
                src={ReactIcon}
                style={{ width: '250px', marginTop: '60px' }}
              />
            </GridFront>
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
            scale: frameScaleSecond,
          }}
        >
          <Grid container xs={12} lg={12} md={12} justifyContent='center'>
            <GridStyle>
              <TypographyCursor style={{ fontSize: '80px', textAlign:'center' }}>
                Developer
              </TypographyCursor>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20
            }}
          >
            <Tag>{Code}</Tag>
          </motion.div>
            </GridStyle>
          </Grid>
        </motion.div>
      </Sticky>
    </>
  )
}

export default SectionOne
