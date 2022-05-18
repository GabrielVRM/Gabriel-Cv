import SectionOne from './Components/OneSection'
import SectionTwo from './Components/SecondSection'
import SectionTheer from './Components/Theerd'
import SectionFour from './Components/FourSection'
import { Main, Section } from './Styles/GlobalStyled'

export default function App () {
  return (
    <>
      <Main style={{ height: '610vh' }}>
        <Section style={{ height: '58%' }}>
          <SectionOne />
        </Section>
        <Section
          style={{
            height: '20%',
            background: '#f7f7ff',
            borderRadius: '40%',
            width: '100%',
            marginTop: '10px'
          }}
        >
          <SectionTwo />
        </Section>
        <Section style={{ height: '20%' }}>
          <SectionTheer />
        </Section>
        <Section style={{ height: '7%' }}>
          <SectionFour />
        </Section>
      </Main>
    </>
  )
}
