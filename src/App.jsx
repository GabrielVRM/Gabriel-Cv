import SectionOne from './Components/OneSection'
import SectionTwo from './Components/SecondSection'
import SectionTheer from './Components/Theerd'
import Cursos from './Components/Theerd'
import SectionFour from './Components/FourSection'
import { Main, Section } from './Styles/GlobalStyled'

export default function App () {
  return (
    <>
      <Main style={{ height: '610vh' }}>
        <Section style={{ height: '70%' }}>
          <SectionOne />
        </Section>
        <Section
          style={{
            height: '25%',
            background: '#f7f7ff',
            borderRadius: '40%',
            width: '100%',
            marginBottom:'400px',
          }}
        >
          <SectionTwo />
        </Section>
        <Section style={{ height: '18%' }}>
          <SectionTheer />
        </Section>
        <Section style={{ height:'auto', background:'#000000', }}>
          <SectionFour />
        </Section>
      </Main>
    </>
  )
}
