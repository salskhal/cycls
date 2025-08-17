import Hero from "./components/Hero";
import How from "./components/How";
import Navbar from "./components/Navbar";
import ProblemSection from "./components/Problem";
import ForDevAndBusiness from "./components/ForDevAndBusiness";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <Hero />
        <ProblemSection />
        <How />
        <ForDevAndBusiness />
      </div>
      <Footer />
    </>
  );
}

export default App;
