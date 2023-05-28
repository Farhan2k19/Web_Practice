import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Footer from './Components/Footer';


function App() {
  return (


    <div className='d-flex justify-content-sb flex-column full-height align-items-center'>

   
    <>
 
      <Header/>
      <Hero/>
      </>

      <Footer className='footer' text={'Copyright 2023'} />

      </div>
  
  );
}

export default App;
