import { Grid, Typography } from '@mui/material'
import { Sticky } from '../../Styles/GlobalStyled'
import { TypographySecondSection } from './style'

export default function SectionTwo () {
  // const { scrollYProgress } = useViewportScroll()
  // const framerOpacity = useTransform(scrollYProgress, [1,0], [0.1, 0.9])
  // const frameScale = useTransform(scrollYProgress, [1, 0.9], [0.2, 0.9])

  //Segundo Motion
  // const framerOpacitySecond = useTransform(scrollYProgress, [0.3, 0], [0, 1])
  // const frameScaleSecond = useTransform(scrollYProgress, [1, 0.1], [0.1, 0.7])

  return (
    <>
    <Sticky>

      <Grid container xs={12} justifyContent='center'  >
          <TypographySecondSection style={{ fontSize: 35,  letterSpacing:12 }}>Experiencia</TypographySecondSection>
        <Grid item xs={12} mt={6} textAlign='center' >
          <TypographySecondSection
            style={{
              fontSize: 25,
              marginBottom: 10,
              marginTop: 25,
              color: '#000000',
              fontWeight: '600',
              letterSpacing:5
             
            }}
          >
            Nave A vela <br />{' '}
            <p style={{ fontSize: 16,  }}>Jovem Aprendiz - 11/2019 a 01/2021 </p>
          </TypographySecondSection>
          <TypographySecondSection style={{ fontSize: 15, }}>
            Acompanhamento dos produtos da empresa, cuidando do SLA, analisando
            e criando Dashboards no Google Data Studio e Excel
          </TypographySecondSection>
<Grid/>
<Grid item xs={12} textAlign='center' mt={6}> 
          <TypographySecondSection
            style={{
              fontSize: 25,
              marginBottom: 10,
              marginTop: 20,
              color: '#000000',
              fontWeight: '600',
              letterSpacing:5
            }}
          >
            Onepay <br />{' '}
            <p style={{ fontSize: 16 }}>estagiario de Ti - 06/2021 a 03/2021</p>
          </TypographySecondSection>
          <TypographySecondSection style={{ fontSize: 15}}>
            Realizei Suporte Técnico, Manutenção de Desktops, Atualização de
            Sistema Operacional (Windows e Ubunto), configurações de E-mail,
            auxiliei em projetos de Desenvolvimento, Trabalhei com Linguagens
            como JavaScript, Html, Css, Frameworks como React e bibliotecas de
            estilização como Material UI e Frame Motion criei uma pagina de
            Rastreio para nossa empresa, consumindo API do Correios e Mandaê,
            Realizei extrações no Banco de Dados, utilizando Mysql workbench e
            fiz atualizações nas tabelas, realizei upgrade na nossa landing page
            através do wordpress.
          </TypographySecondSection>
          </Grid>
          <Grid item xs={12} textAlign='center' mt={6} >
          <TypographySecondSection
            style={{
              fontSize: 25,
              marginBottom: 10,
              marginTop: 20,
              color: '#000000',
              fontWeight: '600',
              letterSpacing:5
            }}
          >
            Onepay <br />{' '}
            <p style={{ fontSize: 16 }}>
              Analista de Ti - 03/2022 - Atualmente
            </p>
          </TypographySecondSection>
          <TypographySecondSection style={{ fontSize: 15 }}>
            Banco de Dados Mysql - Utilizando a Linguagem Sql manipulando dados
            para extrair relarorios e realizar updates, Suporte Tecnico em Geral
            ( manutenção em computadores e auxilio rotineiro com problemas de
            logica para excel ou linguagens de programação) Auxilio em problemas
            no Dashboard, utilizando React JS, Material UI. Manutenção na nossa
            landing Page com Wordpress.
          </TypographySecondSection>
          </Grid>
        </Grid>

        <Grid item mt={20} >
           <Typography style={{fontFamily:'Raleway', fontWeight:'600', fontSize:'40px', marginBottom:'40px'}}>
             Cursos Realizados 
           </Typography>
           <Typography style={{fontFamily:'Raleway', fontSize:'30px'}}>
             Havard - introdução a Ciencias da Computação <span style={{fontSize:'20px'}}>concluido</span>
           </Typography>
           <Typography style={{fontFamily:'Raleway', fontSize:'30px'}}>
            JavaScript - Udemy <span style={{fontSize:'20px'}}>em andamento</span> 
           </Typography>
           <Typography style={{fontFamily:'Raleway', fontSize:'30px'}}>
Wise Up Online <span style={{fontSize:'20px'}}>em andamento</span>
           </Typography>
           <Typography style={{fontFamily:'Raleway', fontSize:'30px'}}>
Power Bi - udemy <span style={{fontSize:'20px'}}>concluido</span>  
           </Typography>
           <Typography style={{fontFamily:'Raleway', fontSize:'30px'}}>
            React - Udemy <span style={{fontSize:'20px'}}> em andamento </span> 
           </Typography>
           <Typography style={{fontFamily:'Raleway', fontSize:'30px'}}>
            Typescript - Udemy  <span style={{fontSize:'20px'}}> em andamento </span>
           </Typography>

        </Grid>
      </Grid>
      </Sticky>
    </>
  )
            }
