import Contact from '../../components/patterns/contact/Contact';
import Footer from '../../components/patterns/footer/Footer';
import Hero from '../../components/patterns/hero/Hero';
import Projects from '../../components/patterns/projects/Projects';

import '/src/index.css';

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;



