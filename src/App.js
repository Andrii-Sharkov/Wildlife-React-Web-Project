import './App.css';
import BackgroundImage from './components/background-image-component';
import Explore from './components/explore-component';
import Footer from './components/footer-component';
import Gallery from './components/gallery-component';
import Header from './components/header-component';
import Hero from './components/hero-component';
import Info from './components/info-component';
import ShowcaseOne from './components/showcaseOne-component';
import ShowcaseTwo from './components/showcaseTwo-component';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Explore />
      <ShowcaseOne />
      <Info />
      <BackgroundImage />
      <ShowcaseTwo />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
