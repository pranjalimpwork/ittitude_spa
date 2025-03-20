import About from './components/about';
import Clients from './components/client';
import Contact from './components/contact';
import Header from './components/header';
import Navbar from './components/nav';
import Service from './components/service';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Service />
      <Clients />
      <About />
      <Contact />
    </>
  );
}

export default App;
