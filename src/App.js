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
import { Login } from './components/Pages/Login'
import { Footer } from './components/Footer';
import { useState, useEffect, } from 'react';
import * as HeroService from './services/HeroService';
import { Catalog } from './components/Catalog/Catalog';
import Warrior from './components/HeroClasses/Warrior/Warrior';
import Mage from './components/HeroClasses/Mage/Mage';
import Druid from './components/HeroClasses/Druid/Druid';
import Paladin from './components/HeroClasses/Paladin/Paladin';
import Hunter from './components/HeroClasses/Hunter/Hunter';
import Priest from './components/HeroClasses/Priest/Priest';
import Rogue from './components/HeroClasses/Rogue/Rogue';
import Shaman from './components/HeroClasses/Shaman/Shaman';
import { HeroDetails } from './components/Pages/HeroDetails/HeroDetails';
import Warlock from './components/HeroClasses/Warlock/Warlock';
import DeathKnight from './components/HeroClasses/DeathKnight/DeathKnight';





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
                    <Route path='/catalog' element={<Catalog hero={hero} />} />
                    <Route path='/catalog/:heroId' element={<HeroDetails />} />
                    {/* heroes class --> */}
                    <Route path='/class/paladin' element={<Paladin />} />
                    <Route path='/class/warrior' element={<Warrior />} />
                    <Route path='/class/mage' element={<Mage />} />
                    <Route path='/class/druid' element={<Druid />} />
                    <Route path='/class/hunter' element={<Hunter />} />
                    <Route path='/class/priest' element={<Priest />} />
                    <Route path='/class/rogue' element={<Rogue />} />
                    <Route path='/class/shaman' element={<Shaman />} />
                    <Route path='/class/warlock' element={<Warlock />} />
                    <Route path='/class/death' element={<DeathKnight />} />
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </main>

            <Footer />
        </div>
    );

}
export default App;