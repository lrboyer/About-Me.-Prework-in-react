import Header from './components/Header';
import Me from './components/Me';
import About from './components/About';
import TechSupport from './components/TechSupport';
//import Header from './components/Header';
//import Header from './components/Header';

function App() {
  return (
    <div>
        <Header/>
        <Me/>
        <About/>
        <TechSupport/>
        <footer class="text-white bg-gray-800 p-10 italic text-center">
            © 2021 Lucas Boyer. All rights reserved.
        </footer>
    </div>
  );
}

export default App;