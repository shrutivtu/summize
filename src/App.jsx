import Hero from './components/Hero';
import Demo from './components/Demo';

import './App.css';

const App = () => {
  return (
    <main>
        <section className='main'>
            <div className='gradient'>

            </div>
        </section>

        <section className='app'>
            <Hero />
            <Demo />
        </section>
    </main>
  )
}

export default App