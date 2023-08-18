import './Styles/App.css'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import Title from './components/Title'

function App() {

 
  return (
    <>
      <Nav />
      <section id='body'>
        <Title />
        <Portfolio />
      </section>
    </>
  )
}

export default App
