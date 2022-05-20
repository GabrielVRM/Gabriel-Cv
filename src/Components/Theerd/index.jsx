import { Grid, Typography } from '@mui/material'
import { DivImage } from './style'
import { motion } from 'framer-motion'

export default function SectionTheer () {
  const listImage = [
    {
      img:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
      alt: 'Rafa-Js'
    },
    {
      img:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
      alt: 'Rafa-React'
    },
    {
      img:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
      alt: 'Rafa-HTML'
    },

    {
      img:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
      alt: 'Rafa-CSS'
    },

    {
      img:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      alt: 'Rafa-CSS'
    },
    {
      img:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg',
      alt: 'Rafa-CSS'
    },
    {
      img:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg',
      alt: 'Rafa-CSS'
    },
    {
      img:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
      alt: 'Rafa-CSS'
    },
    {
      img:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      alt: 'Rafa-CSS'
    }
  ]
  return (
    <Grid container justifyContent='center'>
      <Grid item xs={12}   >
        <Typography
          fontSize={40}
          textAlign='center'
          fontFamily='Raleway, sans-serif'
          marginBottom={1}
          marginTop={20}
        >
          Linguagens e Frameworks
        </Typography>
        <Typography
          fontSize={20}
          textAlign='center'
          fontFamily='Raleway, sans-serif'
          marginBottom={5}
        >
          Conhecimento Adquirido em:
        </Typography>
        </Grid>
        <Grid container xs={12} justifyContent="center" >
        <DivImage>
          {listImage.map(item => (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
              />
            </motion.div>
          ))}
        </DivImage>
        </Grid>
    </Grid>


)
 
}

 