import '../Styles/Home.css'
import Title from '../components/Title.jsx'
import Portfolio from '../components/Portfolio.jsx'

function Home({ couples }) {
   

    return (
        <section id='body'>
            <Title />
            <Portfolio couples={couples}/>
        </section>
    )
}

export default Home