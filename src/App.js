import Header from "./components/Header";
import Me from "./components/Me";
import About from "./components/About";
import TechSupport from "./components/TechSupport";
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <Me />
      <About />
      <div
        id="techSupport"
        class="container px-5 py-24 mx-auto text-gray-600 body-front"
      >
        <div class="md:flex md:flex-wrap md:-m-4 grid grid-cols-3">
          <TechSupport
            alt="Man in sunglasses at the beach"
            pic="lucas"
            name="Lucas Boyer"
            location="Lexington, SC"
          />
          <TechSupport
            alt="Man with Fish"
            pic="matt"
            name="Matison Boyer"
            location="Lexington, SC"
          />
          <TechSupport
            alt="Cat"
            pic="cat"
            name="Tommy Cat"
            location="Lexington, SC"
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
