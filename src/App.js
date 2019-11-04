import React from 'react';
import './styles/App.css';
//import SlideMenu from './slide/SlideMenu';
//import MainSlide from './extra/MainSlide';
//import MenuSlide from './extra/MenuSlide';
import Layout from './layout/Layout';

const App = () => {

    return (
       <Layout />
            
            //<SlideMenu main={(slide, setSlide) => <MainSlide slide={slide} setSlide={setSlide}/>} menu={(slide, setSlide) => <MenuSlide  slide={slide} setSlide={setSlide}/>}/>
            

        
    );
}

export default App