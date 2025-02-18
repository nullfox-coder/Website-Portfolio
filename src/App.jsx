import {BrowserRouter} from 'react-router-dom';
import {About, Contact, Experience, Hero, Navbar,  Tech, Works, StarsCanvas,} from './components';
/*import {Stars} from './components/canvas';*/

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bd-primary">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
        <Hero />
      </div>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
        <div className='relative z-0'>
          <Contact />
           <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
