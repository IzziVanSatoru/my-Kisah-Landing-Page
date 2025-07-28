import { Fragment } from 'preact';
import HeroKaoruko from './components/HeroKaoruko';
import FeatureShowcase from './components/FeatureShowcase';
import AboutAnime from './components/AboutAnime';
import GalleryLove from './components/GalleryLove';
import FooterMemory from './components/FooterMemory';
const App = () => {
  return (
    <Fragment>
      <HeroKaoruko />
      <FeatureShowcase />
      <AboutAnime />
      <GalleryLove />
      <FooterMemory />
    </Fragment>
  );
};

export default App;
