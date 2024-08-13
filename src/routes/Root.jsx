import "../App.css";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer/Footer.jsx";
import { Header } from "../components/Header/Header.jsx";
import {Form} from "../components/Form/Form.jsx"
import { Outlet } from "react-router-dom";

export default function Root() {
    const [image, setImage] = useState("");
    const [formVisible, setFormVisible] = useState(true);

    const onHandleLogin = () => {
        setFormVisible(true);
    };

    const blocks = [
        {class: "div1"},
        {class: "div2"},
        {class: "div3"},
        {class: "div4"},
        {class: "div5"},
    ];

    return (
        <div className='background'>
        {blocks.map((block) => (
          <div key={block.class} className={`${block.class} grid-item`} />
        ))}
            <div className='inner'>
            <Header image={image} onLogin={onHandleLogin} />
            <div className='content'>
                {formVisible ? <Form setImage={setImage} setFormVisible={setFormVisible}/> : <Outlet/>}
            </div>
            <Footer/>
        </div>
      </div>
    )
}