import SectionOne from './Components/presentation'
import SectionTwo from './Components/experience'
import SectionTheer from './Components/language&Frameworks'
import SectionFour from './Components/Footer'
import Courses from './Components/courses'
import { Main, Section } from './Styles/GlobalStyled'
import Header from './Components/Header'

export default function App () {
  return (
    <>
      <Main style={{ height: '650vh' }}>
        <Section style={{ height: '60%' }}>
        <Header/>
          <SectionOne />
        </Section>
        <Section
          style={{
            height: '38%',
            borderRadius: '40%',
            width: 'auto',
            marginTop:'100px'
            
          }}
        >
          <SectionTwo />
        </Section>
        <Section style={{ height: '8%'  }}>
          <Courses />
        </Section>
        <Section style={{ height: '15%', marginTop:'500px' }}>
          <SectionTheer />
        </Section>
        <Section style={{ height: 'auto', background: '#000000' }}>
          <SectionFour />
        </Section>
      </Main>
    </>
  )
}