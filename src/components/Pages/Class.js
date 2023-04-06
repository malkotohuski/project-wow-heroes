import React from 'react';
import '../../App.css';
import '../../Class.css'
import { Link } from 'react-router-dom';

export default function heroClass() {

    return (
        <>
            <section id="class-page">
                <h1>Hero Class</h1>
                <div className='table-heroes'>
                    <div className="paladin">
                        <div className="AllHeroes-info">
                            <h2>Paladin</h2>
                            <Link to='/class/paladin' className="datails-hero-button">Details</ Link>
                        </div>
                    </div>
                    <div className="warrior">
                        <div className="AllHeroes-info">
                            <h2>Warrior</h2>
                            <Link to='/class/warrior' className="datails-hero-button">Details</ Link>
                        </div>
                    </div>
                    <div className="mage">
                        <div className="AllHeroes-info">
                            <h2>Mage</h2>
                            <Link to='/class/mage' className="datails-hero-button">Details</ Link>
                        </div>
                    </div>
                    <div className="druid">
                        <div className="AllHeroes-info">
                            <h2>Druid</h2>
                            <Link to='/class/druid' className="datails-hero-button">Details</ Link>
                        </div>
                    </div>
                    <div className="hunter">
                        <div className="AllHeroes-info">
                            <h2>Hunter</h2>
                            <Link to='/class/hunter' className="datails-hero-button">Details</ Link>
                        </div>
                    </div>
                    <div className="priest">
                        <div className="AllHeroes-info">
                            <h2>Priest</h2>
                            <Link to='/class/priest' className="datails-hero-button">Details</ Link>
                        </div>
                    </div>
                    <div className="rogue">
                        <div className="AllHeroes-info">
                            <h2>Rogue</h2>
                            <Link to='/class/rogue' className="datails-hero-button">Details</ Link>
                        </div>
                    </div>
                    <div className="shaman">
                        <div className="AllHeroes-info">
                            <h2>Shaman</h2>
                            <Link to='/class/shaman' className="datails-hero-button">Details</ Link>
                        </div>
                    </div>
                    <div className="warlock">
                        <div className="AllHeroes-info">
                            <h2>Warlock</h2>
                            <Link to='/class/warlock' className="datails-hero-button">Details</ Link>
                        </div>
                    </div>
                    <div className="death">
                        <div className="AllHeroes-info">
                            <h2>Death Knight</h2>
                            <Link to='/class/death' className="datails-hero-button">Details</ Link>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}


