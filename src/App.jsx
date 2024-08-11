import './App.css';
import { Footer } from './components/Footer/Footer';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className='background'>
      <div className="grid-item div1"/>
      <div className="grid-item div2"/>
      <div className="grid-item div3"/>
      <div className="grid-item div4"/>
      <div className="grid-item div5"/>

      <div className='inner'>
        <Header />
        <div className='content'>
          <Form />
        </div>
        <Footer/>
      </div>

    </div>
  )
}

export default App
