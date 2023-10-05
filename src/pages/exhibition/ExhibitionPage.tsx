import './ExhibitionPage.css'
import { A4EightLayout } from '../../components/a4-eight-layout/A4EightLayout'
import { ExhibitCard } from '../../components/exhibit-card/ExhibitCard'
import cards from './exhibition.json'

function App() {
  return (
    <>
      <A4EightLayout>{
        cards.map((props, index) => (
          <ExhibitCard key={index} {...props}></ExhibitCard>
        ))}</A4EightLayout>
    </>
  )
}

export default App
