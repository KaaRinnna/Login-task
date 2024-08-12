import './App.css';
import { useState } from 'react';
import { Footer } from './components/Footer/Footer';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';

function App() {
  const [image, setImage] = useState("");
  const [formVisible, setFormVisible] = useState(true);

  const onHandleLogin = () => {
    setFormVisible(true);
  }

  return (
    <div className='background'>
      <div className="grid-item div1"/>
      <div className="grid-item div2"/>
      <div className="grid-item div3"/>
      <div className="grid-item div4"/>
      <div className="grid-item div5"/>

      <div className='inner'>
        <Header image={image} onLogin={onHandleLogin} />
        <div className='content'>
          {formVisible && <Form setImage={setImage} setFormVisible={setFormVisible} />}
          
        </div>
        <Footer/>
      </div>

    </div>
  )
}

export default App
