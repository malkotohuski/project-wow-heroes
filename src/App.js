import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import './Class.css'
import './components/CreateHero.css'// <-- !!!
import Home from './components/Pages/Home';
import { Routes, Route, useNavigate, } from 'react-router-dom';
import Class from './components/Pages/Class';
import { CreateHero } from './components/Pages/CreateHero';
import ContactUs from './components/Pages/ContactUs';
import Marketing from './components/Pages/Marketing';
import Consulting from './components/Pages/Consulting';
import { Login } from './components/Pages/Login'
import { Footer } from './components/Footer';
import Paladin from './components/Pages/Paladin';
import { useState, useEffect, } from 'react';
import * as HeroService from './services/HeroService';
import { Catalog } from './components/Catalog/Catalog';





function App() {
    const navigate = useNavigate()
    const [hero, setHero] = useState([]);

    useEffect(() => {
        HeroService.getAll()
            .then(result => {
                console.log(result);
                setHero(result)
            })
    }, []);

    const onCreateHeroSubmit = async (data) => {

        const newHero = await HeroService.create(data);

        setHero(heroo => [...heroo, newHero]);

      navigate('./catalog') 
    };

    return (

        <div id='root'>
            <Navbar />

            <main in="main-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/class' element={<Class />} />
                    <Route path='/create-hero' element={<CreateHero onCreateHeroSubmit={onCreateHeroSubmit} />} />
                    <Route path='/contact-us' element={<ContactUs />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/marketing' element={<Marketing />} />
                    <Route path='/consulting' element={<Consulting />} />
                    <Route path='/class/paladin' element={<Paladin />} />
                    <Route path='/catalog' element={<Catalog hero={hero} />} />
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </main>

            <Footer />
        </div>
    );

}
export default App;