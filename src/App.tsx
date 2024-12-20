import { Header } from './components/Header';
import { SearchSection } from './components/SearchSection';
import { MainBanner } from './components/MainBanner';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <SearchSection />
      <MainBanner />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;