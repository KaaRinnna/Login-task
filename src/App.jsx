import './App.css';
import { useState } from 'react';
import { Footer } from './components/Footer/Footer';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';

function App() {
  const [image, setImage] = useState("");

  return (
    <div className='background'>
      <div className="grid-item div1"/>
      <div className="grid-item div2"/>
      <div className="grid-item div3"/>
      <div className="grid-item div4"/>
      <div className="grid-item div5"/>

      <div className='inner'>
        <Header image={image} />
        <div className='content'>
          <Form setImage={setImage} />
        </div>
        <Footer/>
      </div>

    </div>
  )
}

export default App
