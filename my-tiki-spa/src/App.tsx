import GlobalStyles from './components/GlobalStyles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Seções
import Header from './sections/Header/Header';
import SpoilerSection from './sections/SpoilerSection/SpoilerSection';
import Footer from './sections/Footer/FooterSection';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <SpoilerSection />
      <Footer />
    </>
  );
}

export default App;