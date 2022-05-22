import SectionOne from './Components/presentation'
import SectionTwo from './Components/experience'
import SectionTheer from './Components/language&Frameworks'
import SectionFour from './Components/Footer'
import Courses from './Components/courses'
import { Main, Section } from './Styles/GlobalStyled'

export default function App () {
  return (
    <>
      <Main style={{ height: '650vh' }}>
        <Section style={{ height: '60%' }}>
          <SectionOne />
        </Section>
        <Section
          style={{
            height: '35%',
            borderRadius: '40%',
            width: '100%',
            
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
